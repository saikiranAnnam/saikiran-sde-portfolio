'use client'

import { useEffect, useState } from 'react'

export default function MultipleCursor() {
 const [cursors, setCursors] = useState<Array<{ id: number; x: number; y: number }>>([])
 const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

 useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
   setMousePos({ x: e.clientX, y: e.clientY })
   
   // Create trailing cursors with delay
   const newCursors = []
   for (let i = 0; i < 3; i++) {
    setTimeout(() => {
     setCursors((prev) => {
      const updated = [...prev]
      updated[i] = { id: i, x: e.clientX, y: e.clientY }
      return updated
     })
    }, i * 50)
   }
  }

  window.addEventListener('mousemove', handleMouseMove)
  return () => window.removeEventListener('mousemove', handleMouseMove)
 }, [])

 return (
  <>
   {/* Main cursor */}
   <div
    className="fixed pointer-events-none z-50 mix-blend-difference"
    style={{
     left: mousePos.x,
     top: mousePos.y,
     transform: 'translate(-50%, -50%)',
     transition: 'transform 0.05s ease-out',
    }}
   >
    <div className="w-6 h-6 rounded-full border-2 border-[#9b69ff]" />
   </div>
   
   {/* Trailing cursors */}
   {cursors.map((cursor, index) => (
    <div
     key={cursor.id}
     className="fixed pointer-events-none z-50 mix-blend-difference"
     style={{
      left: cursor.x,
      top: cursor.y,
      transform: `translate(-50%, -50%) scale(${1 - index * 0.2})`,
      opacity: 0.3 - index * 0.1,
      transition: 'all 0.15s ease-out',
     }}
    >
     <div
      className="w-6 h-6 rounded-full border-2"
      style={{
       borderColor: index === 0 ? '#5f8cff' : '#ff6b9d',
      }}
     />
    </div>
   ))}
  </>
 )
}
