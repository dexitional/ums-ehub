import React from 'react'

function PgPublic() {
  return (
    <div className="py-3 px-3 flex-1 h-full rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-3 md:space-y-6">
        <h1 className="px-4 py-2.5 text-base md:text-xl rounded bg-blue-950/80 font-semibold font-noto text-white ">PUBLIC MONITOR</h1>
        <div className="py-2     md:py-4 px-2 rounded shadow-inner shadow-gray-500/20 bg-white space-y-4">
            {/* <h2 className="px-6 py-1 rounded text-xs md:text-lg text-center text-blue-950 font-extrabold tracking-widest bg-slate-200/70">TEACHING REPRESENTATIVE</h2> */}
            <div className="pt-2 flex items-center justify-center">
              <div className="h-4 w-4 md:h-6 md:w-6 rounded-full border-4 bg-blue-950/80"></div>
            </div>
            <div className="p-2 md:px-3 md:py-3 bg-zinc-200/50 shadow-inner space-y-2 md:space-y-4">
                <h3 className="px-6 py-3.5 bg-white text-xs md:text-lg md:text-left text-center rounded shadow-inner shadow-gray-500/20 font-semibold text-red-900">TEACHING REPRESENTATIVE ON COUNCIL</h3>
                <div className="px-4 py-4 bg-white text-xl rounded">
                    {/* Charts */}
                    charts
                </div>
            </div>
        </div>
    </div>
  )
}

export default PgPublic