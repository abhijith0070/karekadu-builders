import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAREKADU BUILDERS & ARCHITECTS - Premium Construction & Architecture Services',
  description: 'KAREKADU BUILDERS & ARCHITECTS delivers exceptional construction and architectural solutions. From residential villas to commercial landmarks, we build with precision, passion, and purpose.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/trajan-pro" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
