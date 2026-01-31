'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
 const [progress, setProgress] = useState(0)

 useEffect(() => {
  const interval = setInterval(() => {
   setProgress((prev) => {
    if (prev >= 100) {
     clearInterval(interval)
     return 100
    }
    return prev + 2
   })
  }, 60)

  return () => clearInterval(interval)
 }, [])

 return (
  <motion.div
   initial={{ opacity: 1 }}
   exit={{ opacity: 0 }}
   transition={{ duration: 0.5 }}
   className="fixed inset-0 z-50 flex items-center justify-center bg-[#05050a]"
  >
   <div className="relative">
    {/* Animated circles */}
    <motion.div
     className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#9b69ff]"
     animate={{ rotate: 360 }}
     transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
     style={{ width: 80, height: 80 }}
    />
    <motion.div
     className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#5f8cff]"
     animate={{ rotate: -360 }}
     transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
     style={{ width: 100, height: 100, top: -10, left: -10 }}
    />
    
    {/* Name */}
    <motion.h1
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
     className="text-4xl font-bold bg-gradient-to-r from-[#9b69ff] to-[#5f8cff] bg-clip-text text-transparent mt-24 text-center"
    >
     Sai Kiran Annam
    </motion.h1>

    {/* Progress bar */}
    <motion.div
     className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.3 }}
    >
     <motion.div
      className="h-full bg-gradient-to-r from-[#9b69ff] to-[#5f8cff]"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
     />
    </motion.div>

    {/* Loading text */}
    <motion.p
     className="mt-4 text-gray-400 text-sm text-center"
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ delay: 0.5 }}
    >
     Loading portfolio...
    </motion.p>
   </div>
  </motion.div>
 )
}
