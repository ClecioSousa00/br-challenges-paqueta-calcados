import { ReactNode } from 'react'
import './globals.css'
import { Poppins, Montserrat } from 'next/font/google'
import { Header } from '@/components/Header'
import { Providers } from '@/providers/providers'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'Paquetá Calçados',
  description:
    'A Paquetá Calçados é uma renomada marca de calçados que busca expandir sua presença online e oferecer aos seus clientes uma experiência digital atraente e funcional.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${montserrat.variable} h-screen bg-white font-sans text-white`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
