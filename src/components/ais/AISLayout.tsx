import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router'
import AISNav from './AISNav'
import AISRoleNav from './AISRoleNav'
import AISLogoBox from './AISLogoBox'

type Props = {
    children: React.ReactNode
}

function AISLayout({ children }: Props) {
  
  return (
    <div className="w-full h-screen flex flex-col justify-between">
    <Header />
    <AISRoleNav/>
    <main className="w-full flex-1 flex flex-col md:overflow-y-scroll">
      <section className="md:mx-auto w-full md:max-w-7xl flex">
         <div className="z-20 w-56 h-full bg-gradient-to-r from-white to-primary/5 bg-opacity-5 hidden md:flex flex-col space-y-1">
            <AISLogoBox />
            <AISNav />
         </div>
         <div className="flex-1">
             <Outlet />
         </div>
      </section>
      
    </main>
    <Footer />
</div>
  )
}

export default AISLayout