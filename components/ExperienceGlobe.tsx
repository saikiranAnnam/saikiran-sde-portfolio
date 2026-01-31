'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Experience {
 title: string
 company: string
 location: string
 period: string
 highlights: string[]
 tech: string[]
 color: string
 coordinates: { lat: number; lng: number }
}

interface ExperienceGlobeProps {
 experiences: Experience[]
 selectedIndex: number
 onSelect: (index: number) => void
}

export default function ExperienceGlobe({
 experiences,
 selectedIndex,
 onSelect,
}: ExperienceGlobeProps) {
 const canvasRef = useRef<HTMLCanvasElement>(null)
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
 const prevSelectedIndexRef = useRef<number>(selectedIndex)

 useEffect(() => {
  const canvas = canvasRef.current
  if (!canvas) return

  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return

  let animationFrameId: number
  let time = 0
  let currentAngleX = 0
  let currentAngleY = 0

  const setCanvasSize = () => {
   const container = canvas.parentElement
   if (!container) return
   const size = Math.min(container.clientWidth, container.clientHeight, 600)
   canvas.width = size * 2
   canvas.height = size * 2
   canvas.style.width = size + 'px'
   canvas.style.height = size + 'px'
  }
  setCanvasSize()
  window.addEventListener('resize', setCanvasSize)

  const centerX = canvas.width / 2
  const centerY = canvas.height / 2
  const radius = Math.min(centerX, centerY) * 0.7

  // Convert lat/lng to 3D sphere coordinates
  function latLngTo3D(lat: number, lng: number, r: number) {
   const phi = ((90 - lat) * Math.PI) / 180 // colatitude
   const theta = ((lng + 180) * Math.PI) / 180 // longitude
   const x = r * Math.sin(phi) * Math.cos(theta)
   const y = r * Math.cos(phi)
   const z = r * Math.sin(phi) * Math.sin(theta)
   return { x, y, z }
  }

  // 3D rotation
  function rotate3D(x: number, y: number, z: number, angleX: number, angleY: number) {
   // Rotate around X axis
   const y1 = y * Math.cos(angleX) - z * Math.sin(angleX)
   const z1 = y * Math.sin(angleX) + z * Math.cos(angleX)
   // Rotate around Y axis
   const x2 = x * Math.cos(angleY) - z1 * Math.sin(angleY)
   const z2 = x * Math.sin(angleY) + z1 * Math.cos(angleY)
   return { x: x2, y: y1, z: z2 }
  }

  // Project 3D to 2D
  function project(x: number, y: number, z: number) {
   const fov = 400
   const scale = fov / (fov + z)
   return {
    x: centerX + x * scale,
    y: centerY + y * scale,
    scale: Math.max(0.1, scale),
    z,
   }
  }

  // Generate sphere points for drawing
  function generateSpherePoints() {
   const points: Array<{ x: number; y: number; z: number; lat: number; lng: number }> = []
   const segments = 30
   for (let lat = 0; lat <= 180; lat += 180 / segments) {
    for (let lng = 0; lng <= 360; lng += 360 / segments) {
     const phi = (lat * Math.PI) / 180
     const theta = (lng * Math.PI) / 180
     const x = radius * Math.sin(phi) * Math.cos(theta)
     const y = radius * Math.cos(phi)
     const z = radius * Math.sin(phi) * Math.sin(theta)
     points.push({ x, y, z, lat, lng })
    }
   }
   return points
  }

  const spherePoints = generateSpherePoints()

  // Plane animation state
  let planeAnimStartTime: number | null = null
  const planeAnimDuration = 3000 // 3 seconds for plane travel

  // Reset plane animation when selectedIndex changes
  if (prevSelectedIndexRef.current !== selectedIndex) {
   planeAnimStartTime = null
   prevSelectedIndexRef.current = selectedIndex
  }

  function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height)
   time += 0.016

   // Rotation angles
   const angleX = Math.sin(time * 0.2) * 0.3 // Gentle tilt
   const angleY = time * 0.15 // Continuous rotation
   currentAngleX = angleX
   currentAngleY = angleY

   // Update plane position
   if (planeAnimStartTime === null) {
    planeAnimStartTime = performance.now()
   }
   const elapsed = performance.now() - (planeAnimStartTime || 0)
   const planeProgress = Math.min(elapsed / planeAnimDuration, 1)
   
   // Reset animation when experience changes
   if (planeProgress >= 1 && experiences.length > 1) {
    planeAnimStartTime = performance.now() // Restart animation for the next segment
   }

   // Draw globe background (dark space)
   const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 2)
   bgGradient.addColorStop(0, 'rgba(10, 10, 20, 0.3)')
   bgGradient.addColorStop(1, 'rgba(5, 5, 10, 0.5)')
   ctx.fillStyle = bgGradient
   ctx.fillRect(0, 0, canvas.width, canvas.height)

   // Draw sphere wireframe/grid
   ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)'
   ctx.lineWidth = 0.5

   // Draw latitude lines
   for (let lat = 0; lat <= 180; lat += 30) {
    const points: Array<{ x: number; y: number }> = []
    for (let lng = 0; lng <= 360; lng += 5) {
     const phi = (lat * Math.PI) / 180
     const theta = (lng * Math.PI) / 180
     const x = radius * Math.sin(phi) * Math.cos(theta)
     const y = radius * Math.cos(phi)
     const z = radius * Math.sin(phi) * Math.sin(theta)
     const rotated = rotate3D(x, y, z, angleX, angleY)
     const proj = project(rotated.x, rotated.y, rotated.z)
     if (proj.z > -radius) {
      points.push({ x: proj.x, y: proj.y })
     }
    }
    if (points.length > 1) {
     ctx.beginPath()
     ctx.moveTo(points[0].x, points[0].y)
     for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
     }
     ctx.stroke()
    }
   }

   // Draw longitude lines
   for (let lng = 0; lng <= 360; lng += 30) {
    const points: Array<{ x: number; y: number }> = []
    for (let lat = 0; lat <= 180; lat += 5) {
     const phi = (lat * Math.PI) / 180
     const theta = (lng * Math.PI) / 180
     const x = radius * Math.sin(phi) * Math.cos(theta)
     const y = radius * Math.cos(phi)
     const z = radius * Math.sin(phi) * Math.sin(theta)
     const rotated = rotate3D(x, y, z, angleX, angleY)
     const proj = project(rotated.x, rotated.y, rotated.z)
     if (proj.z > -radius) {
      points.push({ x: proj.x, y: proj.y })
     }
    }
    if (points.length > 1) {
     ctx.beginPath()
     ctx.moveTo(points[0].x, points[0].y)
     for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
     }
     ctx.stroke()
    }
   }

   // Draw sphere surface (ocean)
   const oceanGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5)
   oceanGradient.addColorStop(0, 'rgba(30, 60, 120, 0.4)')
   oceanGradient.addColorStop(0.5, 'rgba(20, 50, 100, 0.3)')
   oceanGradient.addColorStop(1, 'rgba(10, 30, 60, 0.2)')

   // Draw sphere as filled circles for depth
   const sortedPoints = spherePoints
    .map((p) => {
     const rotated = rotate3D(p.x, p.y, p.z, angleX, angleY)
     const proj = project(rotated.x, rotated.y, rotated.z)
     return { ...p, proj, rotated }
    })
    .filter((p) => p.proj.z > -radius)
    .sort((a, b) => b.proj.z - a.proj.z)

   sortedPoints.forEach((p) => {
    if (p.proj.scale > 0.3) {
     ctx.fillStyle = oceanGradient
     ctx.beginPath()
     ctx.arc(p.proj.x, p.proj.y, 2 * p.proj.scale, 0, Math.PI * 2)
     ctx.fill()
    }
   })

   // Draw experience locations
   const locationPoints = experiences.map((exp, index) => {
    const pos3D = latLngTo3D(exp.coordinates.lat, exp.coordinates.lng, radius)
    const rotated = rotate3D(pos3D.x, pos3D.y, pos3D.z, angleX, angleY)
    const proj = project(rotated.x, rotated.y, rotated.z)
    return { exp, index, pos3D, rotated, proj }
   })

   // Draw flight paths
   locationPoints.forEach((loc, index) => {
    if (index === locationPoints.length - 1) return
    const next = locationPoints[index + 1]

    // Great circle path
    const steps = 50
    const pathPoints: Array<{ x: number; y: number }> = []
    for (let i = 0; i <= steps; i++) {
     const t = i / steps
     // Interpolate on sphere surface
     const lat1 = loc.exp.coordinates.lat
     const lng1 = loc.exp.coordinates.lng
     const lat2 = next.exp.coordinates.lat
     const lng2 = next.exp.coordinates.lng

     // Simple interpolation (for great circle, use more complex math)
     const lat = lat1 + (lat2 - lat1) * t
     const lng = lng1 + (lng2 - lng1) * t

     const pos3D = latLngTo3D(lat, lng, radius)
     const rotated = rotate3D(pos3D.x, pos3D.y, pos3D.z, angleX, angleY)
     const proj = project(rotated.x, rotated.y, rotated.z)

     if (proj.z > -radius) {
      pathPoints.push({ x: proj.x, y: proj.y })
     }
    }

    if (pathPoints.length > 1) {
     ctx.strokeStyle = `${loc.exp.color}40`
     ctx.lineWidth = 1.5
     ctx.setLineDash([5, 5])
     ctx.beginPath()
     ctx.moveTo(pathPoints[0].x, pathPoints[0].y)
     for (let i = 1; i < pathPoints.length; i++) {
      ctx.lineTo(pathPoints[i].x, pathPoints[i].y)
     }
     ctx.stroke()
     ctx.setLineDash([])
    }
   })

   // Draw location markers
   locationPoints
    .filter((loc) => loc.proj.z > -radius)
    .sort((a, b) => b.proj.z - a.proj.z)
    .forEach((loc) => {
     const isSelected = loc.index === selectedIndex
     const isHovered = loc.index === hoveredIndex
     const size = isSelected ? 12 : isHovered ? 10 : 8

     // Pulse effect for selected
     if (isSelected) {
      const pulseSize = size + Math.sin(time * 5) * 3
      ctx.fillStyle = `${loc.exp.color}30`
      ctx.beginPath()
      ctx.arc(loc.proj.x, loc.proj.y, pulseSize * 2, 0, Math.PI * 2)
      ctx.fill()
     }

     // Marker pin
     ctx.fillStyle = loc.exp.color
     ctx.beginPath()
     ctx.arc(loc.proj.x, loc.proj.y, size, 0, Math.PI * 2)
     ctx.fill()

     // White center
     ctx.fillStyle = '#fff'
     ctx.beginPath()
     ctx.arc(loc.proj.x, loc.proj.y, size * 0.5, 0, Math.PI * 2)
     ctx.fill()

     // Outer ring
     ctx.strokeStyle = loc.exp.color
     ctx.lineWidth = 2
     ctx.beginPath()
     ctx.arc(loc.proj.x, loc.proj.y, size, 0, Math.PI * 2)
     ctx.stroke()

     // Label for selected
     if (isSelected && loc.proj.scale > 0.5) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(loc.proj.x - 40, loc.proj.y - 30, 80, 20)
      ctx.fillStyle = '#fff'
      ctx.font = 'bold 12px system-ui'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(loc.exp.location, loc.proj.x, loc.proj.y - 20)
     }
    })

   // Draw plane
   const currentLoc = locationPoints[selectedIndex]
   const nextLoc = locationPoints[(selectedIndex + 1) % locationPoints.length]

   if (currentLoc && nextLoc) {
    const elapsed = performance.now() - (planeAnimStartTime || 0)
    const t = Math.min(elapsed / planeAnimDuration, 1)
    const lat = currentLoc.exp.coordinates.lat + (nextLoc.exp.coordinates.lat - currentLoc.exp.coordinates.lat) * t
    const lng = currentLoc.exp.coordinates.lng + (nextLoc.exp.coordinates.lng - currentLoc.exp.coordinates.lng) * t

    const plane3D = latLngTo3D(lat, lng, radius * 1.05) // Slightly above surface
    const rotated = rotate3D(plane3D.x, plane3D.y, plane3D.z, angleX, angleY)
    const proj = project(rotated.x, rotated.y, rotated.z)

    if (proj.z > -radius) {
     // Calculate plane rotation angle
     const currentProj = currentLoc.proj
     const nextProj = nextLoc.proj
     const angle = Math.atan2(nextProj.y - currentProj.y, nextProj.x - currentProj.x) * (180 / Math.PI)

     ctx.save()
     ctx.translate(proj.x, proj.y)
     ctx.rotate((angle * Math.PI) / 180)

     // Draw plane
     ctx.fillStyle = '#ff6b6b'
     ctx.beginPath()
     ctx.ellipse(0, 0, 15, 6, 0, 0, Math.PI * 2)
     ctx.fill()

     // Wings
     ctx.fillStyle = '#ff8e8e'
     ctx.beginPath()
     ctx.moveTo(-10, -4)
     ctx.lineTo(-18, -12)
     ctx.lineTo(-12, -4)
     ctx.closePath()
     ctx.fill()

     ctx.beginPath()
     ctx.moveTo(-10, 4)
     ctx.lineTo(-18, 12)
     ctx.lineTo(-12, 4)
     ctx.closePath()
     ctx.fill()

     // Tail
     ctx.beginPath()
     ctx.moveTo(12, -2)
     ctx.lineTo(20, -8)
     ctx.lineTo(20, 0)
     ctx.lineTo(12, 2)
     ctx.closePath()
     ctx.fill()

     // Windows
     ctx.fillStyle = '#87ceeb'
     ctx.beginPath()
     ctx.arc(-5, 0, 2.5, 0, Math.PI * 2)
     ctx.fill()
     ctx.beginPath()
     ctx.arc(3, 0, 2.5, 0, Math.PI * 2)
     ctx.fill()

     ctx.restore()
    }
   }

   animationFrameId = requestAnimationFrame(animate)
  }

  animate()

  // Handle mouse interaction
  const handleMouseMove = (e: MouseEvent) => {
   const rect = canvas.getBoundingClientRect()
   const x = (e.clientX - rect.left) * (canvas.width / rect.width)
   const y = (e.clientY - rect.top) * (canvas.height / rect.height)

   // Check if mouse is over any location marker
   let found = false
   experiences.forEach((exp, index) => {
    const pos3D = latLngTo3D(exp.coordinates.lat, exp.coordinates.lng, radius)
    const rotated = rotate3D(pos3D.x, pos3D.y, pos3D.z, currentAngleX, currentAngleY)
    const proj = project(rotated.x, rotated.y, rotated.z)
    const distance = Math.sqrt(Math.pow(x - proj.x, 2) + Math.pow(y - proj.y, 2))
    if (distance < 20 && !found && proj.z > -radius) {
     setHoveredIndex(index)
     found = true
    }
   })
   if (!found) {
    setHoveredIndex(null)
   }
  }

  const handleClick = (e: MouseEvent) => {
   const rect = canvas.getBoundingClientRect()
   const x = (e.clientX - rect.left) * (canvas.width / rect.width)
   const y = (e.clientY - rect.top) * (canvas.height / rect.height)

   experiences.forEach((exp, index) => {
    const pos3D = latLngTo3D(exp.coordinates.lat, exp.coordinates.lng, radius)
    const rotated = rotate3D(pos3D.x, pos3D.y, pos3D.z, currentAngleX, currentAngleY)
    const proj = project(rotated.x, rotated.y, rotated.z)
    const distance = Math.sqrt(Math.pow(x - proj.x, 2) + Math.pow(y - proj.y, 2))
    if (distance < 20 && proj.z > -radius) {
     onSelect(index)
    }
   })
  }
  
  // Update angles in animate function
  currentAngleX = angleX
  currentAngleY = angleY

  canvas.addEventListener('mousemove', handleMouseMove)
  canvas.addEventListener('click', handleClick)
  canvas.style.cursor = hoveredIndex !== null ? 'pointer' : 'default'

  return () => {
   window.removeEventListener('resize', setCanvasSize)
   canvas.removeEventListener('mousemove', handleMouseMove)
   canvas.removeEventListener('click', handleClick)
   if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
   }
  }
 }, [experiences, selectedIndex, onSelect, hoveredIndex])

 return (
  <div className="relative w-full h-full flex items-center justify-center">
   <canvas ref={canvasRef} className="w-full h-full" />
  </div>
 )
}
