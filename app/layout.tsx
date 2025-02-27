import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './assets/globals.css'

const geistSans = Hanken_Grotesk({
  variable: '--font-hanken-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  authors: [
    {
      name: 'Milos Petrovic',
      url: 'https://www.milosptr.dev',
    },
  ],
  title: 'MarSeafood - Fresh Icelandic Seafood Products',
  description:
    "Discover premium Icelandic seafood, sustainably sourced and expertly processed for global markets. We specialize in high-quality frozen white fish, fresh seafood upon request, and premium by-products. Explore our selection of cod, haddock, saithe, redfish, and more, delivered fresh from Iceland's pristine waters.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
