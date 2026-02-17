import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'WGBO | World Green Building Organization',
  description: 'World Green Building Organization (WGBO) is the premier certification body for green buildings, driving sustainable construction practices and net-zero built environment.',
  icons: {
    icon: '/favicon.ico',
    apple: '/images/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a8a4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
