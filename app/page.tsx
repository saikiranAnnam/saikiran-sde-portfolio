'use client'

import { useState, useEffect } from 'react'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MultipleCursor from '@/components/MultipleCursor'

export default function Home() {
 const [isLoading, setIsLoading] = useState(true)

 useEffect(() => {
  const timer = setTimeout(() => {
   setIsLoading(false)
  }, 3000)

  return () => clearTimeout(timer)
 }, [])

 return (
  <main className="relative min-h-screen bg-black transition-colors duration-300">
   <MultipleCursor />
   {isLoading ? (
    <LoadingScreen />
   ) : (
    <>
     <Navigation />
     <Hero />
     <About />
     <Experience />
     <Education />
     <Projects />
     <Contact />
    </>
   )}
  </main>
 )
}
