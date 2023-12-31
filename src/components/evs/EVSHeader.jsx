import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function EVSHeader({ title, setElection }) {
  return (
    <section className="mx-1.5 md:mx-auto py-6 w-full md:max-w-5xl flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
        <div className="py-1.5 px-2.5 md:flex-1 h-full flex flex-row items-center justify-between space-x-2 md:space-x-10 rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30">
            <button onClick={()=> setElection(null) } className="px-1.5 md:px-3 py-1 flex items-center rounded  bg-amber-400 text-gray-800 tracking-wider font-bold uppercase">
                <FaChevronLeft className="w-4 h-4 text-black md:hidden" />
                <span className="hidden md:flex">Prev</span>
            </button>
            <h3 className="px-3 py-1.5 md:py-1 flex-1 rounded text-center text-xs md:text-lg font-bold tracking-widest text-blue-950 bg-slate-200/70">NURSING STUDENTS ASSOCIATION OF GHANA</h3>
            <button onClick={()=> setElection(null) } className="px-1.5 md:px-3 py-1 flex items-center rounded bg-amber-400 text-gray-800 tracking-wider font-bold uppercase">
                <FaChevronRight className="w-4 h-4 text-black md:hidden" />
                <span className="hidden md:flex">Next</span>
            </button>
        </div>
        <div className="px-4 py-2 md:py-1 md:px-3 w-full md:w-64 rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
            <div className="text-center text-xl md:text-3xl text-blue-950 font-bold font-mono">00:00:00</div>
        </div>
    </section>
  )
}

export default EVSHeader