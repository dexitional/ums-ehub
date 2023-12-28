import React from 'react'
import Header from '../Header'
import DricNavItem from './DricNavItem'
import { FaChartBar, FaRegChartBar } from 'react-icons/fa'
import Footer from '../Footer'
import { Outlet } from 'react-router'
import DricNav from './DricNav'
import DricLogoBox from './DricLogoBox'
import DricRoleNav from './DricRoleNav'
import { useUserStore } from '../../utils/authService'

type Props = {
    children: React.ReactNode
}

function DricLayout({ children }: Props) {
  
  return (
    <div className="w-full h-screen flex flex-col">
    <Header />
    <DricRoleNav />
    <main className="w-full flex flex-col overflow-y-scroll">
      <section className="mx-1.5 md:mx-auto w-full md:max-w-7xl flex">
         <div className="z-20 w-56 h-full bg-gradient-to-r from-white to-zinc-200/50 bg-opacity-5 hidden md:flex flex-col space-y-10">
            <DricLogoBox />
            <DricNav />
         </div>
         <div className="flex-1 min-h-screen">
             <Outlet />
         </div>
      </section>
      
    </main>
    <Footer />
</div>
  )
}

export default DricLayout