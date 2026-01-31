'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Navigation() {
 const [isScrolled, setIsScrolled] = useState(false)
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

 useEffect(() => {
  const handleScroll = () => {
   setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 const navItems = [
  { name: 'Home', href: '#home', number: '01', color: '#0071e3' },
  { name: 'About', href: '#about', number: '02', color: '#5f8cff' },
  { name: 'Experience', href: '#experience', number: '03', color: '#9b69ff' },
  { name: 'Projects', href: '#projects', number: '04', color: '#ff6b9d' },
  { name: 'Contact', href: '#contact', number: '05', color: '#ff9900' },
 ]

 return (
  <motion.nav
   initial={{ y: -100 }}
   animate={{ y: 0 }}
   transition={{ duration: 0.5 }}
   className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    isScrolled
     ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
     : 'bg-transparent'
   }`}
  >
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
     {/* Logo */}
     <motion.a
      href="#home"
      className="text-2xl font-bold bg-gradient-to-r from-[#0071e3] via-[#5f8cff] to-[#9b69ff] bg-clip-text text-transparent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
     >
      SKA
     </motion.a>

     {/* Desktop Navigation - Colorful with Numbers */}
     <div className="hidden md:flex items-center space-x-6">
      {navItems.map((item, index) => (
       <motion.a
        key={item.name}
        href={item.href}
        className="relative group flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
        whileHover={{ y: -2 }}
        style={{
          color: item.color,
        }}
       >
        <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity">
         {item.number}.
        </span>
        <span className="font-medium">{item.name}</span>
        <motion.span
         className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full"
         style={{ backgroundColor: item.color }}
         whileHover={{ width: '100%' }}
         transition={{ duration: 0.3 }}
        />
        <motion.div
         className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity"
         style={{ backgroundColor: item.color }}
        />
       </motion.a>
      ))}
     </div>

     {/* Social Links */}
     <div className="hidden md:flex items-center space-x-4">
      <motion.a
       href="https://github.com/saikiranAnnam"
       target="_blank"
       rel="noopener noreferrer"
       whileHover={{ scale: 1.2, rotate: 5 }}
       whileTap={{ scale: 0.9 }}
       className="text-gray-400 hover:text-white transition-colors"
      >
       <FaGithub size={20} />
      </motion.a>
      <motion.a
       href="https://linkedin.com/in/saikiranannam"
       target="_blank"
       rel="noopener noreferrer"
       whileHover={{ scale: 1.2, rotate: -5 }}
       whileTap={{ scale: 0.9 }}
       className="text-gray-400 hover:text-[#0a66c2] transition-colors"
      >
       <FaLinkedin size={20} />
      </motion.a>
      <motion.a
       href="mailto:saikiranannam99@gmail.com"
       whileHover={{ scale: 1.2 }}
       whileTap={{ scale: 0.9 }}
       className="text-gray-400 hover:text-[#ff6b9d] transition-colors"
      >
       <FaEnvelope size={20} />
      </motion.a>
     </div>

     {/* Mobile Menu Button */}
     <button
      className="md:hidden text-[#f5f5f7]"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     >
      {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
     </button>
    </div>
   </div>

   {/* Mobile Menu */}
   <AnimatePresence>
    {isMobileMenuOpen && (
     <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-[#1d1d1f] border-t border-[#424245]"
     >
      <div className="px-4 py-4 space-y-4">
       {navItems.map((item) => (
        <motion.a
         key={item.name}
         href={item.href}
         className="block text-[#86868b] hover:text-white transition-colors flex items-center gap-2"
         onClick={() => setIsMobileMenuOpen(false)}
         whileHover={{ x: 10 }}
         style={{ color: item.color }}
        >
         <span className="text-xs font-mono opacity-60">{item.number}.</span>
         <span>{item.name}</span>
        </motion.a>
       ))}
       <div className="flex items-center space-x-4 pt-4 border-t border-[#424245]">
        <a
         href="https://github.com/saikiranAnnam"
         target="_blank"
         rel="noopener noreferrer"
         className="text-[#86868b] hover:text-white transition-colors"
        >
         <FaGithub size={20} />
        </a>
        <a
         href="https://linkedin.com/in/saikiranannam"
         target="_blank"
         rel="noopener noreferrer"
         className="text-[#86868b] hover:text-[#0a66c2] transition-colors"
        >
         <FaLinkedin size={20} />
        </a>
        <a
         href="mailto:saikiranannam99@gmail.com"
         className="text-[#86868b] hover:text-[#ff6b9d] transition-colors"
        >
         <FaEnvelope size={20} />
        </a>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </motion.nav>
 )
}
