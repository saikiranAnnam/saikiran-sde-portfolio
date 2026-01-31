'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub, FaCode, FaCloud, FaDatabase } from 'react-icons/fa'
import { 
 SiPython, 
 SiJavascript, 
 SiTypescript, 
 SiReact, 
 SiNextdotjs,
 SiKubernetes,
 SiRedis,
 SiGooglecloud
} from 'react-icons/si'

// Tech icon mapping
const getTechIcon = (tech: string) => {
 const iconMap: { [key: string]: any } = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Kubernetes': SiKubernetes,
  'AWS': FaCloud,
  'GCP': SiGooglecloud,
  'Redis': SiRedis,
  'GoLang': FaCode,
  'Golang': FaCode,
  'OCR': FaCode,
 }
 return iconMap[tech] || FaCode
}

const getTechColor = (tech: string) => {
 const colorMap: { [key: string]: string } = {
  'Python': '#3776ab',
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'React.js': '#61dafb',
  'Next.js': '#000000',
  'Kubernetes': '#326ce5',
  'AWS': '#ff9900',
  'GCP': '#4285f4',
  'Redis': '#dc382d',
  'GoLang': '#00add8',
  'Golang': '#00add8',
  'OCR': '#0071e3',
 }
 return colorMap[tech] || '#58a6ff'
}

const projects = [
 {
  title: 'Truecaptcha.org',
  description:
   'Production SaaS platform for automated CAPTCHA solving using ML/OCR. Scaled from prototype to handling 600K+ daily API calls and generating $20K+ revenue.',
  highlights: [
   'Scaled to 600K+ daily API calls and 1M+ total requests',
   'OCR-based ML pipelines with 90%+ accuracy',
   'Production monitoring, guardrails, and fallback systems',
   'Generated $20K+ USD revenue with cost-efficient operations',
  ],
  tech: ['Python', 'Kubernetes', 'AWS', 'JavaScript', 'GCP', 'OCR', 'React.js'],
  link: 'https://truecaptcha.org/',
  github: null,
  color: '#9b69ff',
  image: '/images/truecaptcha.png',
 },
 {
  title: 'Lamprotech.com',
  description:
   'SaaS platform for browser automation via natural language. LLM-powered engine processes 50K+ tokens daily, supporting 200+ users with $1K+ MRR.',
  highlights: [
   'LLM-driven browser automation from natural language commands',
   'Production Chrome extension with backend integration',
   'TypeScript/Golang backend processing 50K+ tokens daily',
   '200+ active users generating $1K+ monthly recurring revenue',
  ],
  tech: ['TypeScript', 'Next.js', 'GoLang', 'AWS', 'Redis'],
  link: 'https://lamprotech.com/',
  github: null,
  color: '#5f8cff',
  image: '/images/lamprotech.png',
 },
]

export default function Projects() {
 const ref = useRef(null)
 const isInView = useInView(ref, { once: true, margin: '-100px' })

 return (
  <section
   id="projects"
   ref={ref}
   className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black transition-colors duration-300"
  >
   <div className="max-w-7xl mx-auto">
    <motion.div
     initial={{ opacity: 0, y: 50 }}
     animate={isInView ? { opacity: 1, y: 0 } : {}}
     transition={{ duration: 0.6 }}
     className="text-center mb-16"
    >
     <h2 className="text-4xl md:text-5xl font-semibold mb-4">
      <span className="text-[#f5f5f7]">Featured </span>
      <span className="bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent">
       Projects
      </span>
     </h2>
     <p className="text-[#86868b] max-w-2xl mx-auto">
      Production-grade SaaS platforms and scalable systems I've built and deployed
     </p>
    </motion.div>

    <div className="space-y-16">
     {projects.map((project, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.6, delay: index * 0.2 }}
       className="bg-[#1d1d1f] border border-[#424245] rounded-lg overflow-hidden group"
      >
       <div className="grid lg:grid-cols-2 gap-0">
        {/* Left Side - Project Information */}
        <div className={`p-8 lg:p-12 flex flex-col justify-start ${index % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: 'calc((50vw) * (1764 / 2928) + 40px)' }}>
         <div className="flex items-start justify-between mb-4">
          <h3 className="text-3xl font-semibold text-[#f5f5f7]">{project.title}</h3>
          <div className="flex gap-3">
           {project.link && (
            <motion.a
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.2, rotate: 5 }}
             whileTap={{ scale: 0.9 }}
             className="text-[#86868b] hover:text-[#0071e3] transition-colors"
            >
             <FaExternalLinkAlt size={20} />
            </motion.a>
           )}
           {project.github && (
            <motion.a
             href={project.github}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.2, rotate: -5 }}
             whileTap={{ scale: 0.9 }}
             className="text-[#86868b] hover:text-[#0071e3] transition-colors"
            >
             <FaGithub size={20} />
            </motion.a>
           )}
          </div>
         </div>

         <p className="text-[#86868b] mb-6 leading-relaxed text-lg">{project.description}</p>

         <div className="mb-6 space-y-3">
          {project.highlights.map((highlight, i) => (
           <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2 + i * 0.1 }}
            className="flex items-start gap-3 text-sm text-[#86868b]"
           >
            <span className="text-[#0071e3] mt-1.5">▹</span>
            <span>{highlight}</span>
           </motion.div>
          ))}
         </div>

         {/* Tech Stack with Icons and Colors */}
         <div className="mb-6">
          <h4 className="text-sm font-semibold text-[#86868b] mb-3 uppercase tracking-wider">
           Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
           {project.tech.map((tech, i) => {
            const IconComponent = getTechIcon(tech)
            const techColor = getTechColor(tech)
            return (
             <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + i * 0.05 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all group"
              style={{
               backgroundColor: `${techColor}10`,
               borderColor: `${techColor}30`,
               color: techColor,
              }}
              whileHover={{ 
               scale: 1.05, 
               borderColor: techColor,
               backgroundColor: `${techColor}20`,
              }}
              whileTap={{ scale: 0.95 }}
             >
              <IconComponent 
               size={14} 
               style={{ color: techColor }}
               className="group-hover:scale-110 transition-transform"
              />
              <span>{tech}</span>
             </motion.button>
            )
           })}
          </div>
         </div>

         <div className="flex gap-4">
          {project.link && (
           <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-[#0071e3] to-[#5f8cff] rounded-lg text-white font-semibold text-center flex items-center justify-center gap-2 hover:from-[#0077ed] hover:to-[#6f9cff] transition-all shadow-lg shadow-[#0071e3]/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
           >
            <FaExternalLinkAlt size={14} />
            Live Preview
           </motion.a>
          )}
         </div>
        </div>

        {/* Right Side - Project Preview Image */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
         <motion.div
          className="relative w-full group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
         >
          {project.image ? (
           <>
            {/* Desktop/Laptop View Container - Height matches image */}
            <div className="relative w-full bg-black flex flex-col">
              {/* Browser Chrome */}
              <div className="h-10 bg-[#1d1d1f] flex items-center gap-2 px-3 flex-shrink-0 border-b border-[#424245]">
               <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
               </div>
               <div className="flex-1 mx-4">
                <div className="h-6 bg-[#0d1117] rounded text-xs flex items-center px-3 text-[#86868b] font-mono truncate">
                 {project.link}
                </div>
               </div>
              </div>
              {/* Project Preview Image - Height matches image dimensions */}
              <div className="relative bg-white w-full" style={{ aspectRatio: '2928/1764' }}>
               <Image
                src={project.image}
                alt={`${project.title} Preview`}
                width={2928}
                height={1764}
                className="w-full h-full object-contain object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
               />
              </div>
             </div>
            
            {/* Overlay with link hint - Always visible on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
             <div className="absolute bottom-4 left-4 right-4">
              <motion.a
               href={project.link}
               target="_blank"
               rel="noopener noreferrer"
               className="block px-4 py-2 bg-gradient-to-r from-[#0071e3] to-[#5f8cff] rounded-lg text-white text-sm font-semibold text-center hover:from-[#0077ed] hover:to-[#6f9cff] transition-all pointer-events-auto shadow-lg"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
              >
               <FaExternalLinkAlt className="inline-block mr-2" size={12} />
               Visit Live Site
              </motion.a>
             </div>
            </div>
           </>
          ) : (
           <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
             <FaCode size={64} className="text-[#424245] mx-auto mb-4 opacity-50" />
             <p className="text-[#86868b] text-sm">
              {project.title} Preview
             </p>
            </div>
           </div>
          )}
         </motion.div>
        </div>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 )
}
