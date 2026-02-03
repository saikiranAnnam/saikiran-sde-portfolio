'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const durationMs = 2200

  useEffect(() => {
    const start = Date.now()
    let rafId: number

    const tick = () => {
      const elapsed = Date.now() - start
      const value = Math.min(100, (elapsed / durationMs) * 100)
      setProgress(value)
      if (value < 100) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-[#05050a]"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Name with jumping animation */}
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-[#9b69ff] to-[#5f8cff] bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.4 },
            y: {
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: 'easeOut',
            },
          }}
        >
          SAI KIRAN
        </motion.h1>

        {/* Smooth progress bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#9b69ff] to-[#5f8cff] rounded-full"
            initial={{ width: 0 }}
            style={{ width: `${progress}%` }}
            transition={{ type: 'tween', duration: 0.15, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
