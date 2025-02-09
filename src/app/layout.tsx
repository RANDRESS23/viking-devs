import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NextUIProviderContext from '@/providers/NextThermesProvider'
import { Navbar } from '@/components/Navbar'
import { norse } from '@/constants/fonts'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Viking Devs | Desarrollo de páginas web personalizadas y profesionales',
  description: 'En Viking Devs, ofrecemos desarrollo de páginas web personalizadas y profesionales para emprendedores y negocios locales. Impulsa tu presencia digital con soluciones innovadoras, accesibles y adaptadas a tus necesidades.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${norse.variable} font-sans`}>
        <NextUIProviderContext>
          <Navbar />
          {children}
        </NextUIProviderContext>
      </body>
    </html>
  )
}
