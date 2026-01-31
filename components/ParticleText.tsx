'use client'

import { useEffect, useRef } from 'react'

interface ParticleTextProps {
 text?: string
}

export default function ParticleText({ text = 'Sai Kiran Annam' }: ParticleTextProps) {
 const canvasRef = useRef<HTMLCanvasElement>(null)

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  // -------- TUNING ----------
  const COLOR = [170, 120, 255] // purple
  const BG_FADE = 0.12 // trails amount (0..1)
  const COUNT = 6500 // particles
  const TEXT_SAMPLE_STEP = 3 // lower = sharper text, heavier
  const SPHERE_R_FACTOR = 0.2 // relative to min(W,H)
  const EXPLODE_POWER = 9.0
  const ATTRACTION = 0.055 // pull toward text
  const FRICTION = 0.9
  const JITTER = 0.05
  const TEXT_DEPTH = 40 // thickness of text in Z
  const FOV = 650 // perspective distance
  // 3-axis rotation speeds:
  const ROT_SPEED_X = 0.0045
  const ROT_SPEED_Y = 0.0055
  const ROT_SPEED_Z = 0.0035

  // phase durations:
  const SPHERE_MS = 800
  const DISPERSE_MS = 900
  // --------------------------

  let W = 0
  let H = 0
  const DPR = Math.min(2, window.devicePixelRatio || 1)
  let cx = 0
  let cy = 0

  function resize() {
   W = Math.floor(window.innerWidth)
   H = Math.floor(window.innerHeight)
   cx = W / 2
   cy = H / 2
   canvas.width = Math.floor(W * DPR)
   canvas.height = Math.floor(H * DPR)
   canvas.style.width = W + 'px'
   canvas.style.height = H + 'px'
   ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  }
  resize()
  window.addEventListener('resize', resize)

  // ---- Offscreen text rasterization → points ----
  function buildTextTargets(textStr: string) {
   const off = document.createElement('canvas')
   const octx = off.getContext('2d')
   if (!octx) return []
   off.width = W
   off.height = H

   const baseSize = Math.floor(Math.min(W, H) * 0.16)
   let fontSize = Math.max(40, baseSize)
   const fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Arial'
   const fontWeight = '800'

   octx.textAlign = 'center'
   octx.textBaseline = 'middle'

   // Fit text to width
   while (fontSize > 24) {
    octx.clearRect(0, 0, W, H)
    octx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
    const w = octx.measureText(textStr).width
    if (w <= W * 0.92) break
    fontSize -= 6
   }

   octx.clearRect(0, 0, W, H)
   octx.fillStyle = '#fff'
   octx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
   octx.fillText(textStr, cx, cy)

   const img = octx.getImageData(0, 0, W, H).data
   const pts: Array<{ x: number; y: number }> = []
   for (let y = 0; y < H; y += TEXT_SAMPLE_STEP) {
    for (let x = 0; x < W; x += TEXT_SAMPLE_STEP) {
     const a = img[(y * W + x) * 4 + 3]
     if (a > 30) pts.push({ x, y })
    }
   }

   // Shuffle for nicer distribution
   for (let i = pts.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0
    ;[pts[i], pts[j]] = [pts[j], pts[i]]
   }

   // Convert 2D pixel points into centered 3D targets (z thickness)
   // Also normalize relative scale for consistent behavior across screens
   const targets3D = pts.map((p) => ({
    x: p.x - cx,
    y: p.y - cy,
    z: (Math.random() * 2 - 1) * TEXT_DEPTH,
   }))

   return targets3D
  }

  function rotateXYZ(x: number, y: number, z: number, ax: number, ay: number, az: number) {
   let cyx = Math.cos(ax)
   let syx = Math.sin(ax)
   let y1 = y * cyx - z * syx
   let z1 = y * syx + z * cyx

   let cyy = Math.cos(ay)
   let syy = Math.sin(ay)
   let x2 = x * cyy + z1 * syy
   let z2 = -x * syy + z1 * cyy

   let cyz = Math.cos(az)
   let syz = Math.sin(az)
   let x3 = x2 * cyz - y1 * syz
   let y3 = x2 * syz + y1 * cyz

   return { x: x3, y: y3, z: z2 }
  }

  function projectTo2D(x: number, y: number, z: number) {
   // Clamp z to prevent negative scale values
   const clampedZ = Math.max(z, -FOV + 1)
   const scale = Math.max(0.1, FOV / (FOV + clampedZ))
   return { x: cx + x * scale, y: cy + y * scale, s: scale }
  }

  // ---- Particle ----
  class P {
   x: number
   y: number
   z: number
   vx: number
   vy: number
   vz: number
   tx: number
   ty: number
   tz: number
   size: number
   a: number

   constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
    this.vx = 0
    this.vy = 0
    this.vz = 0
    this.tx = x
    this.ty = y
    this.tz = z
    this.size = 1.0 + Math.random() * 1.6
    this.a = 0.25 + Math.random() * 0.75
   }

   step(attract: boolean) {
    if (attract) {
     const dx = this.tx - this.x
     const dy = this.ty - this.y
     const dz = this.tz - this.z
     this.vx += dx * ATTRACTION
     this.vy += dy * ATTRACTION
     this.vz += dz * ATTRACTION
    }

    this.vx += (Math.random() - 0.5) * JITTER
    this.vy += (Math.random() - 0.5) * JITTER
    this.vz += (Math.random() - 0.5) * JITTER

    this.vx *= FRICTION
    this.vy *= FRICTION
    this.vz *= FRICTION

    this.x += this.vx
    this.y += this.vy
    this.z += this.vz
   }
  }

  let particles: P[] = []
  let phase: 'sphere' | 'disperse' | 'reform' = 'sphere'
  let phaseStart = 0

  // global rotation angles
  let ax = 0
  let ay = 0
  let az = 0

  function init(name: string) {
   const textStr = (name || '').trim() || 'Sai Kiran Annam'
   const targets = buildTextTargets(textStr)

   const R = Math.min(W, H) * SPHERE_R_FACTOR
   particles = new Array(COUNT)

   // create a 3D sphere distribution (near surface)
   for (let i = 0; i < COUNT; i++) {
    // random direction on sphere
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)

    // radius: closer to surface for sphere look
    const rr = R * (0.7 + 0.3 * Math.random())
    const x = rr * Math.sin(phi) * Math.cos(theta)
    const y = rr * Math.sin(phi) * Math.sin(theta)
    const z = rr * Math.cos(phi)

    const p = new P(x, y, z)

    // assign a text target (wrap)
    const t = targets[i % targets.length]
    p.tx = t.x
    p.ty = t.y
    p.tz = t.z

    particles[i] = p
   }

   phase = 'sphere'
   phaseStart = performance.now()

   // reset rotations so replay feels consistent
   ax = 0
   ay = 0
   az = 0
  }

  function explode() {
   for (const p of particles) {
    const d = Math.max(1, Math.hypot(p.x, p.y, p.z))
    p.vx += (p.x / d) * EXPLODE_POWER * (0.6 + Math.random())
    p.vy += (p.y / d) * EXPLODE_POWER * (0.6 + Math.random())
    p.vz += (p.z / d) * EXPLODE_POWER * (0.6 + Math.random())
   }
  }

  // Start once
  init(text)

  let animationFrameId: number

  function draw() {
   // trails / fade
   ctx.fillStyle = `rgba(5, 5, 10, ${BG_FADE})`
   ctx.fillRect(0, 0, W, H)

   // update rotation angles (3-axis)
   ax += ROT_SPEED_X
   ay += ROT_SPEED_Y
   az += ROT_SPEED_Z

   const now = performance.now()
   const elapsed = now - phaseStart

   if (phase === 'sphere' && elapsed > SPHERE_MS) {
    phase = 'disperse'
    explode()
    phaseStart = now
   } else if (phase === 'disperse' && elapsed > DISPERSE_MS) {
    phase = 'reform'
    phaseStart = now
   }

   // render: glow-ish blending
   ctx.globalCompositeOperation = 'lighter'

   // To make depth feel nicer, draw far-to-near:
   // create a lightweight depth sort key
   // (avoid heavy sort by sampling; but this is okay for ~6k)
   const sorted = particles.slice().sort((a, b) => a.z - b.z)

   for (const p of sorted) {
    const attract = phase === 'reform'
    p.step(attract)

    // rotate ONLY for display (physics stays stable)
    const r = rotateXYZ(p.x, p.y, p.z, ax, ay, az)
    const pr = projectTo2D(r.x, r.y, r.z)

    // size with perspective - ensure radius is always positive
    const radius = Math.max(0.5, p.size * (0.65 + pr.s * 0.55))

    // Only draw if particle is in front of camera (z > -FOV)
    if (r.z > -FOV) {
     const [R, G, B] = COLOR
     ctx.fillStyle = `rgba(${R}, ${G}, ${B}, ${p.a})`
     ctx.beginPath()
     ctx.arc(pr.x, pr.y, radius, 0, Math.PI * 2)
     ctx.fill()
    }
   }

   ctx.globalCompositeOperation = 'source-over'
   animationFrameId = requestAnimationFrame(draw)
  }

  draw()

  return () => {
   window.removeEventListener('resize', resize)
   if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
   }
  }
 }, [text])

 return (
  <canvas
   ref={canvasRef}
   className="absolute inset-0 w-full h-full pointer-events-none"
   style={{ zIndex: 2 }}
  />
 )
}
