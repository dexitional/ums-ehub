import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router'
import NSSRoleNav from './AISPRoleNav'
import NSSLogoBox from './AISPLogoBox'
import NSSNav from './AISPNav'

type Props = {
    children: React.ReactNode
}

function AISPLayout({ children }: Props) {
  
  return (
    <div className="w-full h-screen flex flex-col">
    <Header />
    <NSSRoleNav />
    <main className="w-full flex flex-col md:overflow-y-scroll">
      <section className="md:mx-auto w-full md:max-w-7xl flex">
         <div className="my-8 py-10 z-20 w-56 h-fit rounded-[2rem] bg-primary/80 hidden md:flex flex-col space-y-10">
           <NSSLogoBox />
           <NSSNav />
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

export default AISPLayout