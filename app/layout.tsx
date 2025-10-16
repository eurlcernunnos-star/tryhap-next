import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'HAP – Happy Action Points | tryhap.com',
  description: 'Do useful actions, earn HAP. Spend HAP on AI features and transparent on-chain bounties.',
  openGraph: {
    title: 'HAP – Happy Action Points',
    description: 'Useful actions ↔ AI ↔ Bounties. Transparent, on-chain.',
    url: 'https://tryhap.com',
    images: ['/og.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
