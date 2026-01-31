'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTerminal, FaCode, FaCloud, FaDatabase } from 'react-icons/fa'
import { 
 SiPython, 
 SiTypescript, 
 SiJavascript, 
 SiSpring,
 SiAmazon,
 SiGraphql,
 SiNextdotjs,
 SiNodedotjs
} from 'react-icons/si'

// Tech icon mapping
const getTechIcon = (tech: string) => {
 const iconMap: { [key: string]: any } = {
  'Java': FaCode,
  'Python': SiPython,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'GoLang': FaCode,
  'Golang': FaCode,
  'Spring Boot': SiSpring,
  'Spring MVC': SiSpring,
  'AWS': SiAmazon,
  'DynamoDB': FaDatabase,
  'GraphQL': SiGraphql,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'R': FaCode,
  'Multi-threading': FaCode,
  'JUnit': FaCode,
  'Mockito': FaCode,
  'Stripe': FaCode,
  'Async APIs': FaCode,
  'Event-driven Architecture': FaCloud,
 }
 return iconMap[tech] || FaCode
}

const getTechColor = (tech: string) => {
 const colorMap: { [key: string]: string } = {
  'Java': '#ed8b00',
  'Python': '#3776ab',
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'GoLang': '#00add8',
  'Golang': '#00add8',
  'Spring Boot': '#6db33f',
  'Spring MVC': '#6db33f',
  'AWS': '#ff9900',
  'DynamoDB': '#4053d6',
  'GraphQL': '#e10098',
  'Next.js': '#000000',
  'Node.js': '#339933',
  'Event-driven Architecture': '#0071e3',
  'Multi-threading': '#0071e3',
  'JUnit': '#25a162',
  'Mockito': '#25a162',
  'R': '#276dc3',
  'Stripe': '#635bff',
  'Async APIs': '#0071e3',
 }
 return colorMap[tech] || '#58a6ff'
}

const experiences = [
 {
  title: 'Software Developer Engineer, Intern',
  company: 'Amazon',
  location: 'Seattle, WA',
  period: '05/2025 – 08/2025',
  highlights: [
   'Scaled validation system to process 220M+ DynamoDB partitions\nacross multiple AWS regions, reducing data age by ~96%',
   'Designed and implemented event-driven architecture using Spring MVC\nto replace legacy batch workflows, improving system reliability',
   'Built observability dashboards and metrics for production monitoring,\nsignificantly reducing MTTR in distributed infrastructure'
  ],
  tech: ['Java', 'Spring MVC', 'AWS', 'DynamoDB', 'Event-driven Architecture'],
  color: '#ff9900',
 },
 {
  title: 'Graduate Research Assistant',
  company: 'George Mason University',
  location: 'Fairfax, VA',
  period: '08/2024 – 05/2025',
  highlights: [
   'Collaborated with NASA on GeoWeaver project, building AI-driven\nscheduling system that improved workflow efficiency by 70%',
   'Optimized multi-threaded execution and task queues in high-concurrency\nVM environments to improve throughput and reduce delays',
   'Implemented intelligent resource orchestration with dynamic allocation\nbased on task priority, latency, and runtime signals'
  ],
  tech: ['Java', 'Python', 'R', 'Multi-threading', 'JUnit', 'Mockito'],
  color: '#006633',
 },
 {
  title: 'Software Engineer Intern',
  company: 'Friday AI Private Limited',
  location: 'Noida, India',
  period: '06/2023 – 09/2023',
  highlights: [
   'Developed event-driven microservices using TypeScript and Spring Boot\nfor real-time data processing, handling 500K+ records efficiently',
   'Designed asynchronous AWS-based workflows using Lambda and event\norchestration for scalable, cloud-portable architectures',
   'Architected services with multi-cloud deployment strategies, enabling\nflexible portability between AWS and Azure platforms'
  ],
  tech: ['TypeScript', 'Spring Boot', 'GraphQL', 'AWS Lambda'],
  color: '#5f8cff',
 },
 {
  title: 'Software Engineer Intern',
  company: 'Keysoft IT Private Limited',
  location: 'Clayton, MO',
  period: '08/2022 – 03/2023',
  highlights: [
   'Worked on eRebate ODS development, integrating Stripe payment services\nand geo-location features into Next.js platform',
   'Coordinated with backend Golang services to optimize asynchronous\nrequest flows, reducing checkout latency by 40%',
   'Ensured seamless API communication and reliable payment flows through\ncross-team collaboration and thorough testing'
  ],
  tech: ['Next.js', 'Golang', 'Stripe', 'Async APIs'],
  color: '#ff6b9d',
 },
]

export default function Experience() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })
 const [selectedIndex, setSelectedIndex] = useState(0)
 const [isAutoAnimating, setIsAutoAnimating] = useState(true)
 const [progress, setProgress] = useState(0)

 useEffect(() => {
  if (!isInView || !isAutoAnimating) {
   setProgress(0)
   return
  }

  const duration = 5000 // 5 seconds
  const interval = 100 // Update every 100ms for smooth progress
  let elapsed = 0
  setProgress(0) // Reset progress when starting

  const progressInterval = setInterval(() => {
   elapsed += interval
   const newProgress = Math.min((elapsed / duration) * 100, 100)
   setProgress(newProgress)
  }, interval)

  const changeInterval = setInterval(() => {
   setSelectedIndex((prev) => {
    setProgress(0) // Reset progress when changing
    return (prev + 1) % experiences.length
   })
   elapsed = 0 // Reset elapsed time
  }, duration)

  return () => {
   clearInterval(progressInterval)
   clearInterval(changeInterval)
  }
 }, [isInView, isAutoAnimating, experiences.length])

 const handleExperienceChange = (index: number) => {
  setSelectedIndex(index)
  setIsAutoAnimating(false)
  setProgress(0)
 }

 const currentExp = experiences[selectedIndex]

 return (
  <section
   id="experience"
   ref={ref}
   className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-black bg-[#fbfbfd] transition-colors duration-300 overflow-hidden"
  >
   {/* Subtle lighting effects */}
   <motion.div
    className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    animate={{
     background: 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)',
     scale: [1, 1.1, 1],
     opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
     duration: 8,
     repeat: Infinity,
     ease: 'easeInOut',
    }}
   />
   <motion.div
    className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
    animate={{
     background: 'radial-gradient(circle, rgba(95, 140, 255, 0.1) 0%, transparent 70%)',
     scale: [1, 1.2, 1],
     opacity: [0.2, 0.3, 0.2],
    }}
    transition={{
     duration: 10,
     repeat: Infinity,
     ease: 'easeInOut',
     delay: 1,
    }}
   />

   <div className="max-w-7xl mx-auto">
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      <span className="dark:text-[#f5f5f7] text-[#1d1d1f]">Work </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Experience
      </span>
     </h2>
     <p className="dark:text-[#86868b] text-[#86868b] max-w-2xl mx-auto">
      Journey across the globe building scalable systems
     </p>
    </motion.div>

    {/* Terminal UI Design */}
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.8 }}
     className="max-w-5xl mx-auto"
    >
     {/* Terminal Window */}
     <div className="dark:bg-[#0d1117] bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border dark:border-[#30363d] border-[#3c3c3c]">
      {/* Terminal Header */}
      <div className="dark:bg-[#161b22] bg-[#252526] px-4 py-3 flex items-center gap-2 border-b dark:border-[#30363d] border-[#3c3c3c] relative">
       <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
       </div>
       <div className="flex-1 flex items-center justify-center gap-2">
        <FaTerminal className="dark:text-[#58a6ff] text-[#4ec9b0]" size={14} />
        <span className="text-xs dark:text-[#8b949e] text-[#cccccc] font-mono">
         experience.sh
        </span>
        {isAutoAnimating && (
         <motion.span
          className="text-xs dark:text-[#58a6ff] text-[#4ec9b0] font-mono"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
         >
          [auto]
         </motion.span>
        )}
       </div>
       {/* Progress Bar */}
       {isAutoAnimating && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 dark:bg-[#161b22] bg-[#252526] overflow-hidden">
         <motion.div
          className="h-full bg-gradient-to-r from-[#58a6ff] to-[#4ec9b0]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
         />
        </div>
       )}
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm relative">
       {/* Command Prompt */}
       <motion.div
        key={selectedIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="space-y-4"
       >
        {/* Prompt Line */}
        <div className="flex items-start gap-2 mb-4">
         <span className="dark:text-[#58a6ff] text-[#4ec9b0]">$</span>
         <span className="dark:text-[#f0883e] text-[#dcdcaa]">
          cat experience.json
         </span>
        </div>

        {/* JSON Output */}
        <div className="dark:bg-[#0d1117] bg-[#1e1e1e] rounded p-4 border-l-2 dark:border-[#30363d] border-[#3c3c3c]">
         <div className="space-y-3">
          {/* Company Header */}
          <div className="flex items-center gap-3 mb-4">
           <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: currentExp.color }}
           ></div>
           <span className="dark:text-[#58a6ff] text-[#4ec9b0] font-semibold">
            {currentExp.company}
           </span>
          </div>

          {/* Title */}
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">"title":</span>
           <span className="dark:text-[#a5d6ff] text-[#ce9178]">
            "{currentExp.title}"
           </span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">"location":</span>
           <span className="dark:text-[#a5d6ff] text-[#ce9178]">
            "{currentExp.location}"
           </span>
          </div>

          {/* Period */}
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">"period":</span>
           <span className="dark:text-[#a5d6ff] text-[#ce9178]">
            "{currentExp.period}"
           </span>
          </div>

          {/* Highlights */}
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">"highlights":</span>
           <span className="dark:text-[#6e7681] text-[#858585]">[</span>
          </div>
          <div className="ml-6 space-y-3">
           {currentExp.highlights.map((highlight, i) => (
            <motion.div
             key={i}
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 * i }}
             className="flex items-start gap-2"
            >
             <span className="dark:text-[#6e7681] text-[#858585] mt-1">{i + 1}.</span>
             <div className="flex-1">
              <span className="dark:text-[#a5d6ff] text-[#ce9178] whitespace-pre-line block leading-relaxed">
               "{highlight}"
              </span>
             </div>
             {i < currentExp.highlights.length - 1 && (
              <span className="dark:text-[#6e7681] text-[#858585]">,</span>
             )}
            </motion.div>
           ))}
          </div>
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">],</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">"tech":</span>
           <span className="dark:text-[#6e7681] text-[#858585]">[</span>
          </div>
          <div className="ml-6 flex flex-wrap gap-2">
           {currentExp.tech.map((tech, i) => {
            const IconComponent = getTechIcon(tech)
            const techColor = getTechColor(tech)
            return (
             <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-1.5"
             >
              <span className="dark:text-[#6e7681] text-[#858585]">{'{'}</span>
              <motion.button
               className="flex items-center gap-1.5 px-2 py-1 rounded dark:bg-[#161b22] bg-[#2d2d2d] dark:border dark:border-[#30363d] border border-[#3c3c3c] hover:dark:border-opacity-60 hover: border-opacity-60 transition-all"
               style={{ 
                borderColor: `${techColor}40`,
               }}
               whileHover={{ scale: 1.05, borderColor: techColor }}
               whileTap={{ scale: 0.95 }}
              >
               <IconComponent 
                size={14} 
                style={{ color: techColor }}
               />
               <span className="dark:text-[#a5d6ff] text-[#ce9178] text-xs">
                "{tech}"
               </span>
              </motion.button>
              <span className="dark:text-[#6e7681] text-[#858585]">{'}'}</span>
              {i < currentExp.tech.length - 1 && (
               <span className="dark:text-[#6e7681] text-[#858585]">,</span>
              )}
             </motion.div>
            )
           })}
          </div>
          <div className="flex items-start gap-2">
           <span className="dark:text-[#6e7681] text-[#858585]">]</span>
          </div>
         </div>
        </div>

        {/* Cursor Animation */}
        <div className="flex items-center gap-2 mt-4">
         <span className="dark:text-[#58a6ff] text-[#4ec9b0]">$</span>
         <motion.span
          className="w-2 h-4 dark:bg-[#58a6ff] bg-[#4ec9b0] rounded-sm"
          animate={{ 
           opacity: [1, 0.3, 1],
           scale: [1, 0.9, 1],
           x: [0, 2, 0]
          }}
          transition={{ 
           duration: 1.2, 
           repeat: Infinity,
           ease: [0.4, 0, 0.6, 1]
          }}
         />
        </div>
       </motion.div>
      </div>
     </div>

     {/* Navigation Controls */}
     <div className="flex items-center justify-center mt-6 gap-4">
      <motion.button
       onClick={() => {
        const newIndex = (selectedIndex - 1 + experiences.length) % experiences.length
        handleExperienceChange(newIndex)
       }}
       className="px-4 py-2 dark:bg-[#161b22] bg-[#2d2d2d] dark:border dark:border-[#30363d] border border-[#3c3c3c] rounded text-sm font-mono dark:text-[#8b949e] text-[#cccccc] hover:dark:border-[#1f6feb] hover: border-[#007acc] transition-all"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       ← prev
      </motion.button>
      
      {/* Slide Indicators */}
      <div className="flex gap-2 items-center">
       {experiences.map((_, index) => (
        <button
         key={index}
         onClick={() => handleExperienceChange(index)}
         className="relative"
        >
         <div
          className={`w-2 h-2 rounded-full transition-all ${
           selectedIndex === index
            ? 'dark:bg-[#58a6ff] bg-[#4ec9b0]'
            : 'dark:bg-[#30363d] bg-[#3c3c3c] hover:dark:bg-[#30363d]/60 hover: bg-[#3c3c3c]/60'
          }`}
         />
         {selectedIndex === index && isAutoAnimating && (
          <motion.div
           className="absolute inset-0 rounded-full border-2 dark:border-[#58a6ff] border-[#4ec9b0]"
           animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
           }}
           transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
           }}
          />
         )}
        </button>
       ))}
      </div>

      <motion.button
       onClick={() => {
        const newIndex = (selectedIndex + 1) % experiences.length
        handleExperienceChange(newIndex)
       }}
       className="px-4 py-2 dark:bg-[#161b22] bg-[#2d2d2d] dark:border dark:border-[#30363d] border border-[#3c3c3c] rounded text-sm font-mono dark:text-[#8b949e] text-[#cccccc] hover:dark:border-[#1f6feb] hover: border-[#007acc] transition-all"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
      >
       next →
      </motion.button>

      {/* Auto-play Toggle */}
      <motion.button
       onClick={() => {
        setIsAutoAnimating(!isAutoAnimating)
        setProgress(0)
       }}
       className="px-3 py-2 dark:bg-[#161b22] bg-[#2d2d2d] dark:border dark:border-[#30363d] border border-[#3c3c3c] rounded text-xs font-mono dark:text-[#8b949e] text-[#cccccc] hover:dark:border-[#1f6feb] hover: border-[#007acc] transition-all"
       whileHover={{ scale: 1.05 }}
       whileTap={{ scale: 0.95 }}
       title={isAutoAnimating ? 'Pause slideshow' : 'Play slideshow'}
      >
       {isAutoAnimating ? '⏸' : '▶'}
      </motion.button>
     </div>
    </motion.div>
   </div>
  </section>
 )
}
