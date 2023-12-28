import React from 'react'
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'

function PgSidebar({ setPage, page }) {
  return (
    <div className="p-4 md:py-6 md:px-3 w-full md:w-64 h-fit rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
        <img src={Logo} alt="" className="mx-auto w-28 h-28 object-contain"/>
        <Link to="/evsmain"><button className="mt-4 py-2 w-full rounded-lg bg-blue-950/90 font-bold text-sm text-amber-200 text-center">GOTO ELECTIONS PAGE</button></Link>
        <div className="py-3 rounded shadow-inner shadow-gray-500/20 bg-white space-y-4">
            <h3 className="py-1 bg-blue-950/80 font-bold text-lg text-white text-center">VOTER TURNOUT</h3>
            <p className='text-2xl md:text-4xl text-center text-blue-950 font-bold'>23654</p>
        </div>
        <div className="p-3 rounded shadow-inner shadow-gray-500/20 bg-white space-y-2">
            <button onClick={()=> setPage('public')} className={`${page == 'public' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>PUBLIC MONITOR</button>
            <button onClick={()=> setPage('vip')} className={`${page == 'vip' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>STRONG ROOM </button>
            <button onClick={()=> setPage('candidate')} className={`${page == 'candidate' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>CANDIDATES VIEW</button>
            <button onClick={()=> setPage('register')} className={`${page == 'register' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>VOTERS REGISTER </button>
            <button onClick={()=> setPage('result')} className={`${page == 'result' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>FINAL RESULTS</button>
            <button onClick={()=> setPage('control')} className={`${page == 'control' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>ADMIN CONTROLS</button>
            <button onClick={()=> setPage('control')} className={`${page == 'control' ? `bg-purple-100/70 text-blue-950/90`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>VOTING SIMULATION</button>
        </div>
    </div>
  )
}

export default PgSidebar