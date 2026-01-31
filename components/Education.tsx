'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaCertificate, FaTrophy, FaMedal, FaRibbon, FaStar } from 'react-icons/fa'

const education = [
 {
  degree: 'Master of Science',
  major: 'Computer Science',
  university: 'George Mason University',
  location: 'Fairfax, VA, USA',
  period: 'Anticipated Dec 2025',
  gpa: '4.0/4.0',
  courses: ['Data Mining', 'Advanced Data Analytics', 'Data Analytics with AWS'],
 },
 {
  degree: 'Bachelor of Science',
  major: 'Computer Science',
  university: 'Raghu Engineering College',
  location: 'Visakhapatnam, INDIA',
  period: '08/2019 - 05/2023',
  gpa: '4.0 CGPA',
  courses: ['Object-Oriented Design', 'Database Systems', 'Operating Systems'],
 },
]

export default function Education() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })

 return (
  <section
   id="education"
   ref={ref}
   className="relative py-20 px-4 sm:px-6 lg:px-8 dark:bg-black bg-[#fbfbfd] transition-colors duration-300"
  >
   <div className="max-w-7xl mx-auto">
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      <span className="dark:text-[#f5f5f7] text-[#1d1d1f]">Education & </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Certifications
      </span>
     </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
     {education.map((edu, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.6, delay: index * 0.2 }}
       className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-8 rounded-lg hover:dark:border-[#0071e3]/50 hover: border-[#0071e3]/50 transition-all"
       whileHover={{ scale: 1.02, y: -5 }}
      >
       <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-[#0071e3] rounded-lg">
         <FaGraduationCap size={24} className="text-white" />
        </div>
        <div className="flex-1">
         <h3 className="text-2xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-1">{edu.degree}</h3>
         <p className="text-[#0071e3] font-semibold mb-2">{edu.major}</p>
         <div className="flex items-center gap-4 dark:text-[#86868b] text-[#86868b] text-sm mb-2">
          <span className="flex items-center gap-1">
           <FaMapMarkerAlt size={12} />
           {edu.university}
          </span>
         </div>
         <div className="flex items-center gap-1 dark:text-[#86868b] text-[#86868b] text-sm mb-2">
          <FaCalendarAlt size={12} />
          {edu.location} • {edu.period}
         </div>
         <div className="flex items-center gap-2 mb-4">
          <FaAward className="text-[#0071e3]" size={14} />
          <span className="dark:text-[#f5f5f7] text-[#1d1d1f] font-semibold">GPA: {edu.gpa}</span>
         </div>
        </div>
       </div>

       <div className="mt-4 pt-4 dark:border-t dark:border-[#424245] border-t border-[#d2d2d7]">
        <p className="dark:text-[#86868b] text-[#86868b] text-sm mb-2">Relevant Courses:</p>
        <div className="flex flex-wrap gap-2">
         {edu.courses.map((course, i) => {
          const courseColors = [
           { bg: 'bg-[#0071e3]/10', text: 'text-[#0071e3]', border: 'border-[#0071e3]/30' },
           { bg: 'bg-[#9b59b6]/10', text: 'text-[#9b59b6]', border: 'border-[#9b59b6]/30' },
           { bg: 'bg-[#ff6b9d]/10', text: 'text-[#ff6b9d]', border: 'border-[#ff6b9d]/30' },
           { bg: 'bg-[#ff9900]/10', text: 'text-[#ff9900]', border: 'border-[#ff9900]/30' },
           { bg: 'bg-[#34c759]/10', text: 'text-[#34c759]', border: 'border-[#34c759]/30' },
           { bg: 'bg-[#5f8cff]/10', text: 'text-[#5f8cff]', border: 'border-[#5f8cff]/30' },
          ]
          const color = courseColors[i % courseColors.length]
          return (
           <span
            key={i}
            className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs font-medium border ${color.border}`}
           >
            {course}
           </span>
          )
         })}
        </div>
       </div>
      </motion.div>
     ))}
    </div>

    {/* Certifications */}
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6, delay: 0.4 }}
     className="dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] p-8 rounded-lg"
    >
     <h3 className="text-2xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] mb-6 flex items-center gap-2">
      <FaAward className="text-[#0071e3]" />
      Certifications
     </h3>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
       { name: 'AWS Certified Cloud Practitioner', icon: FaCertificate, color: '#ff9900' },
       { name: 'AWS Developer', icon: FaTrophy, color: '#0071e3' },
       { name: 'AWS Academy Cloud Foundations', icon: FaMedal, color: '#5f8cff' },
       { name: 'Data Science for Engineers by NEPTL', icon: FaRibbon, color: '#9b59b6' },
       { name: 'SQL (Basics, Advanced) by Hackerrank', icon: FaStar, color: '#34c759' },
      ].map((cert, i) => {
       const IconComponent = cert.icon
       return (
        <motion.div
         key={i}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={isInView ? { opacity: 1, scale: 1 } : {}}
         transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
         className="p-4 dark:bg-black bg-[#fbfbfd] rounded-lg dark:border border transition-all group"
         style={{
          borderColor: `${cert.color}30`,
         }}
         whileHover={{ 
          scale: 1.05,
          borderColor: `${cert.color}60`,
         }}
        >
         <div className="flex items-center gap-3">
          <div 
           className="p-2 rounded-lg"
           style={{
            backgroundColor: `${cert.color}15`,
           }}
          >
           <IconComponent 
            size={18} 
            style={{ color: cert.color }}
            className="group-hover:scale-110 transition-transform"
           />
          </div>
          <span 
           className="text-sm flex-1"
           style={{ color: cert.color }}
          >
           {cert.name}
          </span>
         </div>
        </motion.div>
       )
      })}
     </div>
    </motion.div>
   </div>
  </section>
 )
}
