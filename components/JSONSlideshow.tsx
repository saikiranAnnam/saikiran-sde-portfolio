'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaGraduationCap, FaBuilding } from 'react-icons/fa'

interface ExperienceJSON {
 company: string
 location: string
 date: string
 role: string
 highlights: string[]
 tech: string[]
 fileName: string
 icon: React.ReactNode
 color: string
}

const experiences: ExperienceJSON[] = [
 {
  company: 'Amazon',
  location: 'Seattle, WA',
  date: '05/2025 – 08/2025',
  role: 'Software Developer Engineer, Intern',
  highlights: [
   'Scaled to 220M+ DynamoDB partitions',
   'Event-driven architecture',
   'Reduced validation age by ~96%',
   'Multi-region deployment (us-east-1, us-west-1)'
  ],
  tech: ['Java', 'Spring MVC', 'AWS', 'DynamoDB'],
  fileName: 'amazon-experience.json',
  icon: <FaBriefcase size={32} />,
  color: '#FF9900' // Amazon orange
 },
 {
  company: 'George Mason University',
  location: 'Fairfax, VA',
  date: '08/2024 – 05/2025',
  role: 'Graduate Research Assistant',
  highlights: [
   'NASA - GeoWeaver Project',
   'AI-driven scheduling system',
   '70% efficiency improvement',
   'High-concurrency optimization'
  ],
  tech: ['Java', 'Python', 'R', 'Multi-threading'],
  fileName: 'gmu-research.json',
  icon: <FaGraduationCap size={32} />,
  color: '#006633' // GMU green
 },
 {
  company: 'Friday AI',
  location: 'Noida, India',
  date: '06/2023 – 09/2023',
  role: 'Software Engineer Intern',
  highlights: [
   'Event-driven microservices',
   'Processed 500K+ records',
   'Multi-cloud architecture',
   'Real-time data processing'
  ],
  tech: ['TypeScript', 'Spring Boot', 'GraphQL', 'AWS Lambda'],
  fileName: 'friday-ai.json',
  icon: <FaBuilding size={32} />,
  color: '#5f8cff'
 },
 {
  company: 'Keysoft IT',
  location: 'Clayton, MO',
  date: '08/2022 – 03/2023',
  role: 'Software Engineer Intern',
  highlights: [
   'eRebate ODS Development',
   '40% latency reduction',
   'Stripe payment integration',
   'Next.js platform'
  ],
  tech: ['Next.js', 'Golang', 'Stripe', 'Async APIs'],
  fileName: 'keysoft.json',
  icon: <FaBuilding size={32} />,
  color: '#ff6b9d'
 }
]

export default function JSONSlideshow() {
 const [currentIndex, setCurrentIndex] = useState(0)

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentIndex((prev) => (prev + 1) % experiences.length)
  }, 5000) // Change every 5 seconds

  return () => clearInterval(interval)
 }, [])

 const currentExp = experiences[currentIndex]

 return (
  <div className="relative w-full max-w-md">
   {/* JSON Code Block */}
   <div className="bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] border border-white/10 rounded-xl p-6 shadow-2xl overflow-hidden relative backdrop-blur-sm">
    {/* Animated background gradient - Company specific colors */}
    <AnimatePresence mode="wait">
     <motion.div
      key={currentIndex}
      className="absolute inset-0 opacity-20 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
     >
      <div 
       className="absolute inset-0 bg-gradient-to-br rounded-xl"
       style={{
        background: `radial-gradient(circle at top right, ${currentExp.color}20, transparent 70%)`
       }}
      />
     </motion.div>
    </AnimatePresence>
    
    {/* Glow effect - Company specific */}
    <AnimatePresence mode="wait">
     <motion.div
      key={currentIndex}
      className="absolute -inset-1 bg-gradient-to-r rounded-xl opacity-30 blur-xl pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
       background: `linear-gradient(135deg, ${currentExp.color}40, transparent)`
      }}
     />
    </AnimatePresence>
    {/* Company Icon at Top Right Corner - Rotated */}
    <AnimatePresence mode="wait">
     <motion.div
      key={currentIndex}
      initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 15 }}
      exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute top-4 right-4 z-10"
     >
      <div
       className="p-3 rounded-lg shadow-lg"
       style={{
        background: `linear-gradient(135deg, ${currentExp.color}30, ${currentExp.color}15)`,
        border: `2px solid ${currentExp.color}40`,
        boxShadow: `0 4px 20px ${currentExp.color}20`
       }}
      >
       <div style={{ color: currentExp.color }}>
        {currentExp.icon}
       </div>
      </div>
     </motion.div>
    </AnimatePresence>

    <div className="relative z-10 flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
     <div className="flex gap-1.5">
      <motion.div 
       className="w-3 h-3 rounded-full bg-red-500"
       animate={{ scale: [1, 1.1, 1] }}
       transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div 
       className="w-3 h-3 rounded-full bg-yellow-500"
       animate={{ scale: [1, 1.1, 1] }}
       transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.div 
       className="w-3 h-3 rounded-full bg-green-500"
       animate={{ scale: [1, 1.1, 1] }}
       transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
     </div>
     <AnimatePresence mode="wait">
      <motion.span
       key={currentIndex}
       initial={{ opacity: 0, x: -10 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: 10 }}
       transition={{ duration: 0.3 }}
       className="ml-4 text-gray-300 text-sm font-semibold"
      >
       {currentExp.fileName}
      </motion.span>
     </AnimatePresence>
    </div>

    <AnimatePresence mode="wait">
     <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative z-10 space-y-1.5 font-mono text-xs leading-relaxed"
     >
      <motion.div 
       className="flex gap-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.1 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">1</span>
       <span className="text-gray-400 font-bold">{'{'}</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4 group"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.15 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">2</span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "company"
       </span>
       <span className="text-gray-500">:</span>
       <span className="text-white font-medium"> "{currentExp.company}"</span>
       <span className="text-gray-500">,</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4 group"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.2 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">3</span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "location"
       </span>
       <span className="text-gray-500">:</span>
       <span className="text-white font-medium"> "{currentExp.location}"</span>
       <span className="text-gray-500">,</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4 group"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.25 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">4</span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "role"
       </span>
       <span className="text-gray-500">:</span>
       <span className="text-white font-medium"> "{currentExp.role}"</span>
       <span className="text-gray-500">,</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4 group"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.3 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">5</span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "date"
       </span>
       <span className="text-gray-500">:</span>
       <span 
        className="font-medium"
        style={{ 
         color: currentExp.color,
         opacity: 0.9
        }}
       >
        {" "}"{currentExp.date}"</span>
       <span className="text-gray-500">,</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.35 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">6</span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "highlights"
       </span>
       <span className="text-gray-500">:</span>
       <span className="text-gray-400 font-bold"> [</span>
      </motion.div>
      
      {currentExp.highlights.map((highlight, i) => (
       <motion.div 
        key={i} 
        className="flex gap-4 pl-12 group hover:bg-white/5 rounded px-2 -mx-2 transition-colors"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 + i * 0.05 }}
       >
        <span className="text-gray-500 w-6 text-right select-none font-medium">{7 + i}</span>
        <span className="text-white font-medium">"{highlight}"</span>
        {i < currentExp.highlights.length - 1 && (
         <span className="text-gray-500">,</span>
        )}
       </motion.div>
      ))}
      
      <motion.div 
       className="flex gap-4 pl-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.4 + currentExp.highlights.length * 0.05 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">
        {7 + currentExp.highlights.length}
       </span>
       <span className="text-gray-400 font-bold">]</span>
       <span className="text-gray-500">,</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4 pl-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.45 + currentExp.highlights.length * 0.05 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">
        {8 + currentExp.highlights.length}
       </span>
       <span 
        className="font-semibold"
        style={{ color: currentExp.color }}
       >
        "tech"
       </span>
       <span className="text-gray-500">:</span>
       <span className="text-gray-400 font-bold"> [</span>
      </motion.div>
      
      {currentExp.tech.map((tech, i) => (
       <motion.div 
        key={i} 
        className="flex gap-4 pl-12 group hover:bg-white/5 rounded px-2 -mx-2 transition-colors"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 + currentExp.highlights.length * 0.05 + i * 0.05 }}
       >
        <span className="text-gray-500 w-6 text-right select-none font-medium">
         {9 + currentExp.highlights.length + i}
        </span>
        <span 
         className="font-medium"
         style={{ 
          color: currentExp.color,
          textShadow: `0 0 8px ${currentExp.color}40`
         }}
        >
         "{tech}"
        </span>
        {i < currentExp.tech.length - 1 && (
         <span className="text-gray-500">,</span>
        )}
       </motion.div>
      ))}
      
      <motion.div 
       className="flex gap-4 pl-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.5 + currentExp.highlights.length * 0.05 + currentExp.tech.length * 0.05 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">
        {9 + currentExp.highlights.length + currentExp.tech.length}
       </span>
       <span className="text-gray-400 font-bold">]</span>
      </motion.div>
      
      <motion.div 
       className="flex gap-4"
       initial={{ x: -20, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       transition={{ delay: 0.55 + currentExp.highlights.length * 0.05 + currentExp.tech.length * 0.05 }}
      >
       <span className="text-gray-500 w-6 text-right select-none font-medium">
        {10 + currentExp.highlights.length + currentExp.tech.length}
       </span>
       <span className="text-gray-400 font-bold">{'}'}</span>
      </motion.div>
     </motion.div>
    </AnimatePresence>

    <AnimatePresence mode="wait">
     <motion.div
      key={currentIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 mt-4 pt-4 border-t border-white/10 flex items-center justify-between"
     >
      <div className="flex items-center gap-2">
       <motion.div 
        className="w-2 h-2 rounded-full bg-green-500"
        animate={{ 
         scale: [1, 1.3, 1],
         opacity: [1, 0.7, 1]
        }}
        transition={{ 
         duration: 2, 
         repeat: Infinity,
         ease: 'easeInOut'
        }}
       />
       <span className="text-xs text-gray-400 font-medium">Valid JSON</span>
      </div>
      <div className="flex items-center gap-2">
       <span 
        className="text-xs font-semibold"
        style={{ color: currentExp.color }}
       >
        {currentExp.company}
       </span>
       <span className="text-xs text-gray-600">•</span>
       <span className="text-xs text-gray-500">
        {10 + currentExp.highlights.length + currentExp.tech.length} lines
       </span>
      </div>
     </motion.div>
    </AnimatePresence>
   </div>
  </div>
 )
}
