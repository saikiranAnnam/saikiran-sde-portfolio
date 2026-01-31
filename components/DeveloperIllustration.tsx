'use client'

import { motion } from 'framer-motion'

export default function DeveloperIllustration() {
 return (
  <div className="relative w-full h-full flex items-center justify-center">
   <svg
    viewBox="0 0 400 400"
    className="w-full h-full max-w-md"
    xmlns="http://www.w3.org/2000/svg"
   >
    {/* Background glow */}
    <defs>
     <radialGradient id="glow" cx="50%" cy="50%">
      <stop offset="0%" stopColor="rgba(155, 105, 255, 0.3)" />
      <stop offset="100%" stopColor="rgba(155, 105, 255, 0)" />
     </radialGradient>
    </defs>
    <circle cx="200" cy="200" r="180" fill="url(#glow)" />

    {/* Developer Character */}
    <g id="developer">
     {/* Head */}
     <motion.circle
      cx="200"
      cy="120"
      r="35"
      fill="#E8D5B7"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: 'spring' }}
     />
     
     {/* Hair */}
     <motion.path
      d="M 165 120 Q 165 100, 185 95 Q 200 90, 215 95 Q 235 100, 235 120"
      fill="#2C1810"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
     />
     
     {/* Body */}
     <motion.rect
      x="170"
      y="155"
      width="60"
      height="80"
      rx="10"
      fill="#4A90E2"
      initial={{ y: 200 }}
      animate={{ y: 155 }}
      transition={{ delay: 0.4, type: 'spring' }}
     />
     
     {/* Arms holding laptop */}
     <motion.g
      initial={{ rotate: -10 }}
      animate={{ rotate: [-10, -5, -10] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
     >
      {/* Left arm */}
      <ellipse cx="160" cy="200" rx="12" ry="35" fill="#E8D5B7" />
      {/* Right arm */}
      <ellipse cx="240" cy="200" rx="12" ry="35" fill="#E8D5B7" />
      
      {/* Laptop */}
      <rect x="150" y="220" width="100" height="60" rx="5" fill="#1a1a2e" stroke="#9b69ff" strokeWidth="2" />
      <rect x="155" y="225" width="90" height="45" fill="#0a0a0f" />
      <line x1="155" y1="250" x2="245" y2="250" stroke="#9b69ff" strokeWidth="1" />
      <circle cx="200" cy="265" r="3" fill="#9b69ff" />
     </motion.g>
     
     {/* Legs */}
     <motion.rect
      x="180"
      y="235"
      width="15"
      height="50"
      rx="5"
      fill="#2C3E50"
      initial={{ y: 280 }}
      animate={{ y: 235 }}
      transition={{ delay: 0.5, type: 'spring' }}
     />
     <motion.rect
      x="205"
      y="235"
      width="15"
      height="50"
      rx="5"
      fill="#2C3E50"
      initial={{ y: 280 }}
      animate={{ y: 235 }}
      transition={{ delay: 0.6, type: 'spring' }}
     />
     
     {/* Feet */}
     <ellipse cx="187" cy="285" rx="12" ry="8" fill="#34495E" />
     <ellipse cx="212" cy="285" rx="12" ry="8" fill="#34495E" />
    </g>

    {/* Dog */}
    <g id="dog">
     {/* Dog body */}
     <motion.ellipse
      cx="120"
      cy="280"
      rx="25"
      ry="20"
      fill="#8B4513"
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.7, type: 'spring' }}
     />
     
     {/* Dog head */}
     <motion.circle
      cx="100"
      cy="270"
      r="18"
      fill="#8B4513"
      initial={{ x: -50 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.8, type: 'spring' }}
     />
     
     {/* Dog ears */}
     <motion.path
      d="M 90 260 Q 85 250, 90 255"
      fill="#654321"
      stroke="#654321"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.9 }}
     />
     <motion.path
      d="M 110 260 Q 115 250, 110 255"
      fill="#654321"
      stroke="#654321"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 0.95 }}
     />
     
     {/* Dog tail */}
     <motion.path
      d="M 145 280 Q 160 270, 155 285"
      fill="#8B4513"
      stroke="#8B4513"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ 
       pathLength: 1,
       d: [
        "M 145 280 Q 160 270, 155 285",
        "M 145 280 Q 165 275, 160 290",
        "M 145 280 Q 160 270, 155 285"
       ]
      }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
     />
     
     {/* Dog legs */}
     <ellipse cx="110" cy="295" rx="6" ry="12" fill="#654321" />
     <ellipse cx="130" cy="295" rx="6" ry="12" fill="#654321" />
     
     {/* Dog eyes */}
     <circle cx="95" cy="268" r="2" fill="#000" />
     <circle cx="105" cy="268" r="2" fill="#000" />
    </g>

    {/* Code particles floating */}
    {[...Array(8)].map((_, i) => (
     <motion.text
      key={i}
      x={50 + (i * 40)}
      y={50 + (i % 3) * 100}
      fontSize="12"
      fill="#9b69ff"
      opacity={0.4}
      initial={{ y: 400, opacity: 0 }}
      animate={{
       y: [400, -50],
       opacity: [0, 0.4, 0],
      }}
      transition={{
       duration: 3 + i * 0.5,
       repeat: Infinity,
       delay: i * 0.3,
       ease: 'linear',
      }}
     >
      {['<', '/>', '{', '}', '[', ']', '()', '=>'][i]}
     </motion.text>
    ))}
   </svg>
  </div>
 )
}
