'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCheckCircle, FaClock, FaGlobe, FaCode, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import JSONSlideshow from './JSONSlideshow'
export default function Hero() {

 return (
  <section
   id="home"
   className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black transition-colors duration-300"
  >
   {/* Subtle Grid Background */}
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
   
   {/* Subtle Gradient Overlay */}
   <div className="absolute inset-0 bg-black" />
   
   {/* Subtle lighting effects - more professional */}
   <motion.div
    className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-30"
    animate={{
     background: 'radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, transparent 70%)',
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
    className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-30"
    animate={{
     background: 'radial-gradient(circle, rgba(0, 113, 227, 0.08) 0%, transparent 70%)',
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

   {/* Content */}
   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="grid lg:grid-cols-5 gap-12 items-center">
     {/* Left Column - Text Content (60%) */}
     <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8 relative z-10 lg:col-span-3"
     >
      {/* Greeting */}
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.1 }}
       className="flex items-center gap-3"
      >
       <motion.div 
        className="w-12 h-px bg-gradient-to-r from-transparent via-[#0071e3] to-[#5f8cff]"
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ delay: 0.3, duration: 0.6 }}
       />
       <motion.span 
        className="bg-gradient-to-r from-[#0071e3] to-[#5f8cff] bg-clip-text text-transparent font-medium text-sm uppercase tracking-wider"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
       >
        Software Engineer
       </motion.span>
      </motion.div>

      {/* Improved Main Heading - Larger & More Impactful */}
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.2 }}
       className="space-y-4"
      >
       <motion.h1
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight"
       >
        <motion.span 
         className="dark:text-[#f5f5f7] text-[#1d1d1f] relative inline-block"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.3, duration: 0.6 }}
        >
         Engineering{' '}
        </motion.span>
        <motion.span 
         className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent relative inline-block px-2 py-1"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.5, duration: 0.6 }}
        >
         <span className="absolute inset-0 bg-gradient-to-r from-[#0071e3]/20 via-[#5f8cff]/20 to-[#9b69ff]/20 blur-xl rounded-lg -z-10" />
         high-impact backend
        </motion.span>
        <br />
        <motion.span 
         className="dark:text-[#f5f5f7] text-[#1d1d1f] relative inline-block"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.7, duration: 0.6 }}
        >
         systems{' '}
        </motion.span>
        <motion.span 
         className="bg-gradient-to-r from-[#9b69ff] via-[#5f8cff] to-[#0071e3] bg-clip-text text-transparent relative inline-block px-2 py-1"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.9, duration: 0.6 }}
        >
         <span className="absolute inset-0 bg-gradient-to-r from-[#9b69ff]/20 via-[#5f8cff]/20 to-[#0071e3]/20 blur-xl rounded-lg -z-10" />
         at scale.
        </motion.span>
       </motion.h1>

       {/* Name & Title with Highlight */}
       <motion.div
        className="space-y-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
       >
        <motion.h2 
         className="text-xl md:text-2xl font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] relative inline-block"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.2, duration: 0.6 }}
        >
         <span className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0071e3] to-[#5f8cff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
         Sai Kiran Annam
        </motion.h2>
        <motion.p 
         className="text-base dark:text-[#86868b] text-[#86868b] font-medium"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.3, duration: 0.6 }}
        >
         MSCS & GTA @GMU | Prev @Amazon
        </motion.p>
       </motion.div>

       {/* Description with Highlighted Keywords - Larger & Rephrased */}
       <motion.div
        className="max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
       >
        <p className="dark:text-[#86868b] text-[#86868b] leading-relaxed text-base md:text-lg lg:text-xl">
         <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent font-semibold">
          AWS Certified Developer
         </span>
         {' '}and{' '}
         <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent font-semibold">
          M.S. Computer Science
         </span>
         {' '}graduate crafting{' '}
         <span className="dark:text-[#f5f5f7] text-[#1d1d1f] font-medium">
          enterprise-scale distributed systems
         </span>
         {' '}and{' '}
         <span className="dark:text-[#f5f5f7] text-[#1d1d1f] font-medium">
          cloud-native architectures
         </span>
         . Transforming complex challenges into{' '}
         <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent font-semibold">
          scalable, production-ready solutions
         </span>
         {' '}that power millions of users.
        </p>
       </motion.div>
      </motion.div>

      {/* Previous Role & Education - Better Design */}
      <motion.div
       className="flex flex-wrap gap-4"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.5 }}
      >
       {/* Previous Role */}
       <motion.div 
        className="group relative flex items-center gap-3 px-4 py-3 dark:bg-gradient-to-br dark:from-[#1d1d1f] dark:to-black from-white to-[#fbfbfd] dark:border dark:border-[#ff9900]/30 border border-[#ff9900]/30 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2, borderColor: '#ff9900' }}
       >
        <motion.div
         className="absolute inset-0 bg-gradient-to-r from-[#ff9900]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <div className="relative z-10 p-2 bg-gradient-to-br from-[#ff9900]/20 to-[#ff9900]/10 rounded-lg">
         <FaBriefcase className="text-[#ff9900]" size={18} />
        </div>
        <div className="relative z-10 flex-1 min-w-0">
         <p className="text-xs dark:text-[#86868b] text-[#86868b] mb-0.5">Previous Role</p>
         <p className="text-sm font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] truncate">Amazon SDE Intern</p>
        </div>
        <motion.div
         className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ff9900] opacity-60"
         animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
         }}
         transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
         }}
        />
       </motion.div>

       {/* Education */}
       <motion.div 
        className="group relative flex items-center gap-3 px-4 py-3 dark:bg-gradient-to-br dark:from-[#1d1d1f] dark:to-black from-white to-[#fbfbfd] dark:border dark:border-[#006633]/30 border border-[#006633]/30 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        whileHover={{ scale: 1.02, y: -2, borderColor: '#006633' }}
       >
        <motion.div
         className="absolute inset-0 bg-gradient-to-r from-[#006633]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <div className="relative z-10 p-2 bg-gradient-to-br from-[#006633]/20 to-[#006633]/10 rounded-lg">
         <FaGraduationCap className="text-[#006633]" size={18} />
        </div>
        <div className="relative z-10 flex-1 min-w-0">
         <p className="text-xs dark:text-[#86868b] text-[#86868b] mb-0.5">Education</p>
         <p className="text-sm font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] truncate">M.S. CS @ GMU</p>
        </div>
        <motion.div
         className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#006633] opacity-60"
         animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0.9, 0.6],
         }}
         transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
         }}
        />
       </motion.div>
      </motion.div>

      {/* Enhanced CTA Buttons - Cleaner Design with Social Links */}
      <motion.div
       className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.6 }}
      >
       {/* Primary Actions */}
       <div className="flex gap-3">
        <motion.a
         href="#projects"
         className="group relative px-6 py-3 bg-gradient-to-r from-[#0071e3] to-[#5f8cff] rounded-lg font-semibold text-white text-center overflow-hidden shadow-lg shadow-[#0071e3]/20"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.1, duration: 0.5 }}
         whileHover={{ scale: 1.02, y: -2 }}
         whileTap={{ scale: 0.98 }}
        >
         <span className="relative z-10 flex items-center justify-center gap-2">
          <FaCode size={16} className="text-white" />
          View Projects
         </span>
         <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#5f8cff] to-[#9b69ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         />
        </motion.a>
        
        <motion.a
         href="#experience"
         className="group relative px-6 py-3 dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg font-semibold dark:text-[#f5f5f7] text-[#1d1d1f] text-center overflow-hidden"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.2, duration: 0.5 }}
         whileHover={{ scale: 1.02, y: -2 }}
         whileTap={{ scale: 0.98 }}
        >
         <span className="relative z-10 flex items-center justify-center gap-2">
          <FaBriefcase size={16} />
          Show Experience
         </span>
        </motion.a>
       </div>

       {/* Social Links - Compact */}
       <div className="flex items-center gap-3">
        <motion.a
         href="https://linkedin.com/in/saikiranannam"
         target="_blank"
         rel="noopener noreferrer"
         className="p-2.5 dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#0a66c2] text-[#0a66c2] transition-all"
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 1.3, duration: 0.5 }}
         whileHover={{ scale: 1.1, y: -2 }}
         whileTap={{ scale: 0.9 }}
        >
         <FaLinkedin size={18} />
        </motion.a>
        <motion.a
         href="https://github.com/saikiranAnnam"
         target="_blank"
         rel="noopener noreferrer"
         className="p-2.5 dark:bg-[#1d1d1f] bg-white dark:border dark:border-[#424245] border border-[#d2d2d7] rounded-lg dark:text-[#f5f5f7] text-[#1d1d1f] transition-all"
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 1.4, duration: 0.5 }}
         whileHover={{ scale: 1.1, y: -2 }}
         whileTap={{ scale: 0.9 }}
        >
         <FaGithub size={18} />
        </motion.a>
       </div>
      </motion.div>

      {/* Location & Availability - Compact Design */}
      <motion.div
       className="flex flex-wrap items-center gap-4 pt-4 text-sm"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 1.5 }}
      >
       <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6 }}
       >
        <FaMapMarkerAlt className="dark:text-[#86868b] text-[#86868b]" size={14} />
        <span className="dark:text-[#86868b] text-[#86868b]">Fairfax, VA</span>
       </motion.div>
       
       <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7 }}
       >
        <motion.div
         className="w-2 h-2 rounded-full bg-[#34c759]"
         animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
         }}
         transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
         }}
        />
        <span className="text-[#34c759] font-medium">Available for Work</span>
       </motion.div>

       <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
       >
        <FaGlobe className="dark:text-[#86868b] text-[#86868b]" size={14} />
        <span className="dark:text-[#86868b] text-[#86868b]">EST / Flexible</span>
       </motion.div>
      </motion.div>
     </motion.div>

     {/* Right Column - JSON Slideshow (40%) */}
     <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="hidden lg:flex items-center justify-center lg:col-span-2"
     >
      <JSONSlideshow />
     </motion.div>
    </div>

    {/* Scroll Indicator */}
    <motion.div
     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
     animate={{ y: [0, 10, 0] }}
     transition={{ duration: 2, repeat: Infinity }}
    >
     <div className="flex flex-col items-center gap-2">
      <span className="dark:text-[#86868b] text-[#86868b] text-xs uppercase tracking-wider">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-[#0071e3] via-[#5f8cff] to-transparent" />
     </div>
    </motion.div>
   </div>
  </section>
 )
}
