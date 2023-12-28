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

function EVSPage() {

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
          <EVSHeader title="" setElection={null} />
          <section className="mx-1.5 md:mx-auto py-6 w-full md:max-w-6xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              { SwitchPage()}
              <PgSidebar setPage={setPage} page={page} />
          </section>
        </main>
        <Footer />
    </div>
  )
}

export default EVSPage