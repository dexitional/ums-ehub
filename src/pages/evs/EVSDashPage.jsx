import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import PgStrongroom from '../../components/evs/PgStrongroom'
import PgSidebar from '../../components/evs/PgSidebar'
import PgPublic from '../../components/evs/PgPublic'
import PgRegister from '../../components/evs/PgRegister'
import { FaArrowLeft, FaChevronCircleLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import EVSHeader from '../../components/evs/EVSHeader'
import PgCandidate from '../../components/evs/PgCandidate'
import PgResult from '../../components/evs/PgResult'
import PgControl from '../../components/evs/PgControl'
import PgElectionCard from '../../components/evs/PgElectionCard'

function EVSDashPage() {

   const [ page, setPage ] = useState('')
   
   const SwitchPage = () => {
      switch(page){
        case 'vip': return <PgStrongroom />; break;
        case 'public': return <PgPublic />; break;
        case 'register': return <PgRegister />; break;
        case 'candidate': return <PgCandidate />; break;
        case 'control': return <PgControl />; break;
        case 'result': return <PgResult />; break;
        default: return <PgRegister />; break;
      }
   }


  return (
    <div className="w-full h-screen flex flex-col">
        <Header />
        <main className="w-full flex flex-col overflow-y-scroll">
          <section className="mx-1.5 md:mx-auto py-6 w-full md:max-w-6xl">
            <div className="px-2 py-2 md:py-1 md:px-3 w-full rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
              <div className="text-center text-2xl md:text-4xl text-gray-500 font-black font-mono tracking-wide">ELECTA VOTING SYSTEM</div>
            </div>
          </section>
          <section className="mx-1.5 md:mx-auto py-6 w-full md:max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10">
              <PgElectionCard setPage={setPage} page={page} />
              <PgElectionCard setPage={setPage} page={page} />
              <PgElectionCard setPage={setPage} page={page} />
              <PgElectionCard setPage={setPage} page={page} />
          </section>
        </main>
        <Footer />
    </div>
  )
}

export default EVSDashPage