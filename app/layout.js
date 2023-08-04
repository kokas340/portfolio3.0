"use client"
import './globals.css'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jack Spinola',
  description: 'This is my portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`bg-teal-800  ${inter.className}`}>{children}</body>
    </html>
  )
}
