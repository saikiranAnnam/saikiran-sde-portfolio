import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: 'Sai Kiran Annam | Software Developer Engineer',
 description: 'Portfolio of Sai Kiran Annam - AWS Certified Developer, M.S. Computer Science, Software Developer Engineer at Amazon',
 keywords: 'Software Engineer, Full Stack Developer, AWS, Amazon, Portfolio',
}

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en" className="dark" suppressHydrationWarning>
   <body className={inter.className}>
    <ThemeProvider>
     {children}
    </ThemeProvider>
   </body>
  </html>
 )
}
