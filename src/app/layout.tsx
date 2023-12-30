import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/sections'
import Nav from '@/components/Nav'
// import { Providers } from './GlobalRedux/provider'
import StoreProvider from './GlobalRedux/provider'
import Cart from '@/components/Cart'
import Menu from '@/components/Menu'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nike',
  description: 'Best shoe brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <StoreProvider>
      <section className=" w-full overflow-hidden px-20 max-lg:px-10
     ">
      <Nav />
      <section>
        <Menu/>
          <Cart/>

      </section>
     </section> 
        {children} 
      <section className="bg-black  w-full overflow-hidden px-20 max-lg:px-5
      lg:px-5
     ">
      <Footer/>
     </section> 
     </StoreProvider>
      </body>
    </html>
  )
}
