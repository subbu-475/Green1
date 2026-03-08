import type { Metadata, Viewport } from 'next'
import { Outfit, DM_Sans } from 'next/font/google'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['300', '400', '500', '600', '700', '800'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', weight: ['300', '400', '500', '600', '700'] })

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
      <body className={`${outfit.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
