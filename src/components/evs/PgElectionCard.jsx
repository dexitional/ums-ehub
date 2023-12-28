import React from 'react'
import Logo from '../../assets/img/logo.png'
import { Navigate, redirect } from 'react-router'
import { useNavigate } from 'react-router'

function PgElectionCard({ setPage, page }) {
  const navigate = useNavigate()
  return (
    <div className='space-y-2'>
    <div className="px-4 py-2 md:py-1 md:px-3 w-full md:w-64 rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
        <div className="text-center text-base md:text-lg text-blue-950 font-bold font-mono">NURSING STUDENTS ASSOCIATION</div>
    </div>
    <div className="p-4 md:py-6 md:px-3 w-full md:w-64 h-fit rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
        <img src={Logo} alt="" className="mx-auto w-28 h-28 object-contain"/>
        <div className="py-2 px-2 rounded shadow-inner shadow-gray-500/20 bg-white gap-y-2 grid grid-cols-2 place-content-center overflow-hidden">
            <h3 className="py-1 bg-blue-950/80 font-bold text-sm text-white text-center flex items-center justify-center">VOTERS</h3>
            <h3 className='py-1 text-lg md:text-lg text-center border border-blue-950/80 text-blue-950 font-bold'>23654</h3>
            <h3 className="py-1 bg-blue-950/80 font-bold text-sm text-white text-center flex items-center justify-center">TURNOUT</h3>
            <h3 className='py-1 text-lg md:text-lg text-center border border-blue-950/80 text-blue-950 font-bold'>23654</h3>
            <h3 className="py-1 bg-blue-950/80 font-bold text-sm text-white text-center flex items-center justify-center">STATUS</h3>
            <h3 className='py-1 text-sm md:text-sm text-center border border-blue-950/80 text-blue-950 font-bold'>STARTED</h3>
            <div className="p-2 col-span-2 rounded font-roboto border border-blue-950/80 space-y-2">
                <div className="w-full flex items-center justify-between"><span className="py-0.5 px-1.5 rounded bg-blue-950/80 text-white text-xs tracking-widest font-bold inline-block uppercase">Start</span> <span className="font-extrabold text-blue-950 tracking-wide text-sm inline-block align-right">JUN 13, 2021 19:00</span></div>
                <div className="w-full flex items-center justify-between"><span className="py-0.5 px-1.5 rounded bg-blue-950/80 text-white text-xs tracking-widest font-bold inline-block uppercase">End</span> <span className="font-extrabold text-blue-950 tracking-wide text-sm inline-block align-right">JUN 13, 2021 17:00</span></div>
            </div>
        </div>
        <div className="p-3 rounded shadow-inner shadow-gray-500/20 bg-white space-y-2">
            <button onClick={()=> setPage('public')} className={`hover:bg-blue-950/90 bg-red-900 ring-2 ring-blue-950/80 border-2 border-white text-white py-1 px-3.5 w-full rounded-lg focus:ring-0 focus:outline-none font-bold text-base text-center font-noto`}>CLICK TO VOTE</button>
            <button onClick={()=> navigate('/evs')} className={`bg-blue-950/80 text-white py-1.5 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-xs text-center font-noto`}>GOTO ELECTION CENTRE</button>
            <button onClick={()=> navigate('/evs')} className={`bg-blue-950/80 text-white py-1.5 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-xs text-center font-noto`}>MANAGE ELECTION SETUP</button>
            {/* <button onClick={()=> setPage('vip')} className={`${page == 'vip' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>STRONG ROOM </button>
            <button onClick={()=> setPage('candidate')} className={`${page == 'candidate' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>CANDIDATES VIEW</button>
            <button onClick={()=> setPage('register')} className={`${page == 'register' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>VOTERS REGISTER </button>
            <button onClick={()=> setPage('result')} className={`${page == 'result' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>FINAL RESULTS</button>
            <button onClick={()=> setPage('control')} className={`${page == 'control' ? `bg-amber-400 text-black`:`bg-blue-950/80 text-white `} py-1 px-3.5 w-full rounded focus:ring-0 focus:outline-none font-bold text-sm text-left font-noto`}>ADMIN CONTROLS</button> */}
        </div>
    </div>
    </div>
  )
}

export default PgElectionCard