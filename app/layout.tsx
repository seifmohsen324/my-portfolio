import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Seif Mohsen | Computer Engineering Student & Software Engineer',
  description: 'Computer Engineering student at Egypt University of Informatics building projects across AI/ML, cybersecurity, systems programming, embedded systems, and full-stack web development.',
  keywords: ['Computer Engineering', 'Software Engineer', 'AI/ML', 'Cybersecurity', 'Embedded Systems', 'Systems Programming', 'Full-Stack Developer', 'React', 'Next.js', 'Egypt', 'Python', 'C++'],
  authors: [{ name: 'Seif Mohsen Ibrahim Abdelfattah' }],
  icons: {
    icon: '/optimized/seif-logo-180.png',
    apple: '/optimized/seif-logo-180.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
