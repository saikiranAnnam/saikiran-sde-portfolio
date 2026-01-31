'use client'

import { useEffect } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  }, [])

  return <>{children}</>
}
