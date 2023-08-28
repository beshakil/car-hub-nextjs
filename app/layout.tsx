import NavBar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import  Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Car Shop',
  description: 'Developed by Shakil Ahmed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
