'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGlobe, FaCode, FaCloud, FaRocket, FaClock, FaAward, FaBriefcase, FaGraduationCap, FaDatabase } from 'react-icons/fa'
import { 
 SiPython, 
 SiJavascript, 
 SiTypescript, 
 SiReact, 
 SiNodedotjs, 
 SiNextdotjs,
 SiSpring,
 SiPostgresql,
 SiRedis,
 SiGraphql,
 SiKubernetes,
 SiDocker,
 SiPytorch,
 SiPandas,
 SiGit
} from 'react-icons/si'
export default function About() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })
 const [hoveredCard, setHoveredCard] = useState<number | null>(null)

 const stats = [
  { label: 'Years Experience', value: '3+', icon: FaAward, color: '#ff6b9d' },
  { label: 'Projects', value: '4+', icon: FaRocket, color: '#9b59b6' },
 ]

 const timeZones = [
  { zone: 'US EST', time: '9 AM - 5 PM', flag: '🇺🇸' },
  { zone: 'UK GMT', time: '2 PM - 10 PM', flag: '🇬🇧' },
  { zone: 'IN IST', time: '7 PM - 3 AM', flag: '🇮🇳' },
 ]

 const services = [
  { title: 'Backend Engineer', desc: 'Scalable APIs & Services', icon: FaCode, color: '#0071e3' },
  { title: 'Full Stack Engineer', desc: 'End-to-End Solutions', icon: FaRocket, color: '#9b59b6' },
  { title: 'Cloud & DevOps', desc: 'AWS & Distributed Systems', icon: FaCloud, color: '#ff9900' },
  { title: 'Expertise', desc: 'Production-Grade Systems', icon: FaAward, color: '#ff6b9d' },
 ]

 const highlights = [
  { 
   title: 'Graduate Teaching Assistant', 
   company: 'George Mason University', 
   icon: FaGraduationCap,
   color: '#006633',
   desc: 'Mentoring 120+ students, current position',
   current: true
  },
  { 
   title: 'SDE Intern', 
   company: 'Amazon', 
   icon: FaBriefcase,
   color: '#FF9900',
   desc: 'Event-driven architectures, 220M+ partitions',
   current: false
  },
 ]

 const aboutText = "AWS Certified Developer and M.S. Computer Science graduate specializing in distributed systems and cloud architecture. At Amazon, I design event-driven architectures scaling to 220M+ partitions. Built production SaaS platforms handling 600K+ daily API calls."

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
   opacity: 1,
   transition: {
    staggerChildren: 0.1,
   },
  },
 }

 const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
   opacity: 1,
   y: 0,
   transition: {
    duration: 0.5,
   },
  },
 }

 return (
  <section
   id="about"
   ref={ref}
   className="relative py-16 px-4 sm:px-6 lg:px-8 dark:bg-black bg-[#fbfbfd] transition-colors duration-300 overflow-hidden"
  >
   {/* Subtle Background Elements */}
   <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <motion.div
     className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
     style={{
      background: 'radial-gradient(circle, rgba(0, 113, 227, 0.1) 0%, transparent 70%)'
     }}
     animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.3, 0.2],
     }}
     transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
     }}
    />
   </div>

   <div className="relative max-w-7xl mx-auto">
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-12"
    >
     <h2 className="text-3xl md:text-4xl font-semibold mb-2">
      <span className="dark:text-[#f5f5f7] text-[#1d1d1f]">About </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Me
      </span>
     </h2>
     <p className="dark:text-[#86868b] text-[#86868b] text-sm">Building scalable systems at Amazon</p>
    </motion.div>

    <motion.div
     variants={containerVariants}
     initial="hidden"
     animate={isInView ? 'visible' : 'hidden'}
     className="space-y-8"
    >
     {/* About Paragraph */}
     <motion.div
      variants={itemVariants}
      className="max-w-3xl mx-auto text-center"
     >
      <p className="dark:text-[#86868b] text-[#86868b] leading-relaxed text-base">
       {aboutText}
      </p>
     </motion.div>

     {/* Highlights Row */}
     <motion.div
      variants={itemVariants}
      className="grid md:grid-cols-2 gap-4"
     >
      {highlights.map((highlight, index) => {
       const Icon = highlight.icon
       return (
        <motion.div
         key={index}
         className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all group relative overflow-hidden"
         initial={{ opacity: 0, y: 20 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ delay: 0.2 + index * 0.1 }}
         whileHover={{ scale: 1.02, y: -5 }}
        >
         {highlight.current && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-[#34c759]/20 border border-[#34c759]/30 rounded text-xs text-[#34c759] font-medium">
           Current
          </div>
         )}
         <div className="flex items-start gap-4">
          <div 
           className="p-3 rounded-lg"
           style={{ 
            background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}10)`,
            border: `1px solid ${highlight.color}30`
           }}
          >
           <Icon 
            size={24} 
            style={{ color: highlight.color }}
           />
          </div>
          <div className="flex-1">
           <h4 className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold mb-1">{highlight.title}</h4>
           <p className="text-sm font-medium mb-2" style={{ color: highlight.color }}>
            {highlight.company}
           </p>
           <p className="text-xs dark:text-[#86868b] text-[#86868b]">{highlight.desc}</p>
          </div>
         </div>
        </motion.div>
       )
      })}
     </motion.div>

     {/* Stats Row */}
     <motion.div
      variants={itemVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
     >
      {stats.map((stat, index) => {
       const Icon = stat.icon
       return (
        <motion.div
         key={index}
         className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all relative overflow-hidden group"
         whileHover={{ scale: 1.05, y: -5 }}
         onHoverStart={() => setHoveredCard(index)}
         onHoverEnd={() => setHoveredCard(null)}
        >
         <div className="relative z-10">
          <Icon className="mb-3" size={24} style={{ color: stat.color }} />
          <motion.div
           className="text-3xl font-semibold mb-1"
           style={{ color: stat.color }}
           initial={{ scale: 0 }}
           animate={isInView ? { scale: 1 } : {}}
           transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
          >
           {stat.value}
          </motion.div>
          <div className="text-xs dark:text-[#86868b] text-[#86868b]">{stat.label}</div>
         </div>
        </motion.div>
       )
      })}

      {/* Time Zone Card */}
      <motion.div
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all col-span-2 md:col-span-1"
       whileHover={{ scale: 1.05, y: -5 }}
      >
       <FaGlobe className="text-[#0071e3] mb-3" size={24} />
       <div className="text-sm font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-2">Global Time Zones</div>
       <div className="space-y-1">
        {timeZones.map((tz, i) => (
         <motion.div
          key={i}
          className="flex items-center gap-2 text-xs dark:text-[#86868b] text-[#86868b]"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5 + i * 0.1 }}
         >
          <span>{tz.flag}</span>
          <span>{tz.zone}</span>
         </motion.div>
        ))}
       </div>
      </motion.div>

      {/* Availability Card */}
      <motion.div
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#34c759] border border-[#34c759] p-6 rounded-xl hover:dark:border-[#34c759] hover: border-[#34c759] transition-all col-span-2 md:col-span-1"
       whileHover={{ scale: 1.05, y: -5 }}
      >
       <FaClock className="text-[#34c759] mb-3" size={24} />
       <div className="text-sm font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-2">Available</div>
       <div className="flex items-center gap-2">
        <motion.div
         className="w-2 h-2 rounded-full bg-[#34c759]"
         animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
         }}
         transition={{
          duration: 2,
          repeat: Infinity,
         }}
        />
        <span className="text-xs dark:text-[#86868b] text-[#86868b]">24/7 Support</span>
       </div>
      </motion.div>
     </motion.div>

     {/* What I Can Provide */}
     <motion.div
      variants={itemVariants}
      className="mt-8"
     >
      <motion.h3
       className="text-xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-6 flex items-center gap-2"
       initial={{ opacity: 0 }}
       animate={isInView ? { opacity: 1 } : {}}
       transition={{ delay: 0.4 }}
      >
       <div className="w-1 h-6 bg-gradient-to-b from-[#0071e3] via-[#5f8cff] to-[#9b69ff] rounded-full" />
       What I Can Provide
      </motion.h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
       {services.map((service, index) => {
        const Icon = service.icon
        return (
         <motion.div
          key={index}
          className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.03, y: -5 }}
         >
          <Icon className="mb-4" size={28} style={{ color: service.color }} />
          <h4 className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold mb-2">{service.title}</h4>
          <p className="dark:text-[#86868b] text-[#86868b] text-sm">{service.desc}</p>
         </motion.div>
        )
       })}
      </div>
     </motion.div>

     {/* Highlight Points */}
     <motion.div
      variants={itemVariants}
      className="grid md:grid-cols-2 gap-4 mt-8"
     >
      <motion.div
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl"
       initial={{ opacity: 0, x: -20 }}
       animate={isInView ? { opacity: 1, x: 0 } : {}}
       transition={{ delay: 0.6 }}
      >
       <h4 className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0071e3] to-[#5f8cff]" />
        Key Highlights
       </h4>
       <ul className="space-y-2.5 text-sm dark:text-[#86868b] text-[#86868b]">
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.7 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span><strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">AWS Certified Developer</strong> - Cloud expertise</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.75 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span>Scaled to <strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">220M+ DynamoDB partitions</strong> at Amazon</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.8 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span>Built <strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">production SaaS platforms</strong> handling 600K+ daily API calls</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.85 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span><strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">NASA Research Assistant</strong> - 70% efficiency improvement</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.9 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span><strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">Graduate Teaching Assistant</strong> - Mentoring 120+ students</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 0.95 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span>Generated <strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">$20K+ revenue</strong> from SaaS platforms</span>
        </motion.li>
        <motion.li
         initial={{ opacity: 0, x: -10 }}
         animate={isInView ? { opacity: 1, x: 0 } : {}}
         transition={{ delay: 1.0 }}
         className="flex items-start gap-2"
        >
         <span className="text-[#0071e3] mt-1">▹</span>
         <span>Event-driven architectures scaling to <strong className="dark:text-[#f5f5f7] text-[#1d1d1f]">multi-region deployments</strong></span>
        </motion.li>
       </ul>
      </motion.div>

      <motion.div
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-6 rounded-xl"
       initial={{ opacity: 0, x: 20 }}
       animate={isInView ? { opacity: 1, x: 0 } : {}}
       transition={{ delay: 0.6 }}
      >
       <h4 className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0071e3] to-[#5f8cff]" />
        Expertise
       </h4>
       <div className="flex flex-wrap gap-3">
        {[
         { name: 'Java', icon: FaCode, color: '#ed8b00' },
         { name: 'Python', icon: SiPython, color: '#3776ab' },
         { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
         { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
         { name: 'GoLang', icon: FaCode, color: '#00add8' },
         { name: 'C++', icon: FaCode, color: '#00599c' },
         { name: 'React.js', icon: SiReact, color: '#61dafb' },
         { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
         { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
         { name: 'Spring Boot', icon: SiSpring, color: '#6db33f' },
         { name: 'Spring MVC', icon: SiSpring, color: '#6db33f' },
         { name: 'AWS', icon: FaCloud, color: '#ff9900' },
         { name: 'DynamoDB', icon: FaDatabase, color: '#4053d6' },
         { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
         { name: 'MySQL', icon: FaDatabase, color: '#4479a1' },
         { name: 'Redis', icon: SiRedis, color: '#dc382d' },
         { name: 'GraphQL', icon: SiGraphql, color: '#e10098' },
         { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
         { name: 'Docker', icon: SiDocker, color: '#2496ed' },
         { name: 'Kafka', icon: FaCloud, color: '#231f20' },
         { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
         { name: 'Pandas', icon: SiPandas, color: '#150458' },
         { name: 'Git', icon: SiGit, color: '#f05032' },
         { name: 'REST APIs', icon: FaCode, color: '#ff6b6b' },
         { name: 'CI/CD', icon: FaRocket, color: '#9b59b6' },
        ].map((tech, i) => {
         const Icon = tech.icon
         return (
          <motion.button
           key={i}
           className="group relative px-4 py-2.5 dark:bg-black bg-[#fbfbfd] dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg overflow-hidden transition-all"
           initial={{ opacity: 0, scale: 0 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{
            delay: 0.7 + i * 0.03,
            type: 'spring',
            stiffness: 200,
           }}
           whileHover={{ scale: 1.08, y: -3 }}
           whileTap={{ scale: 0.95 }}
          >
           <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
             background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
            }}
           />
           <span className="relative z-10 flex items-center gap-2">
            <Icon 
             size={16} 
             className="group-hover:scale-110 transition-transform duration-300"
             style={{ color: tech.color }}
            />
            <span className="text-xs font-medium dark:text-[#86868b] text-[#86868b] group-hover:dark:text-[#f5f5f7] group-hover: text-[#1d1d1f] transition-colors">
             {tech.name}
            </span>
           </span>
          </motion.button>
         )
        })}
       </div>
      </motion.div>
     </motion.div>
    </motion.div>
   </div>
  </section>
 )
}
