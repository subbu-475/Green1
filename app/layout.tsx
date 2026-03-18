import type { Metadata, Viewport } from 'next'
import { Outfit, Lato, Roboto, Open_Sans } from 'next/font/google'

import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['300', '400', '500', '600', '700', '800'] })
const lato = Lato({ subsets: ['latin'], variable: '--font-lato', weight: ['300', '400', '700', '900'] })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto', weight: ['300', '400', '500', '700', '900'] })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans', weight: ['300', '400', '500', '600', '700', '800'] })

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
            <body className={`${outfit.variable} ${lato.variable} ${roboto.variable} ${openSans.variable} font-sans antialiased `}>{children}</body>
        </html>
    )
}

