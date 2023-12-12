import type { Metadata } from 'next'
import Navbar from '@/components/navbar'

import './globals.css'
import { monasansLight } from '@/styles/fonts'


export const metadata: Metadata = {
  title: 'Studio.',
  description: 'Studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={monasansLight.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
