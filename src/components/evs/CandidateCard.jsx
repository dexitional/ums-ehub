import React from 'react'

function CandidateCard({ showResult, winner }) {
  return (
    <div className="px-2 p-2 w-full h-fit border-2 border-blue-950/10 bg-blue-300/5 rounded flex flex-col items-start">
        <div className="px-1 p-2 w-full h-fit border border-slate-300 rounded flex  space-x-2 items-start">
            <div className="relative h-32 w-32 md:h-36 md:w-36 rounded bg-slate-200">
                <img src={`https://ehub.ucc.edu.gh/api/photos/?tag=15666`} className="rounded object-cover object-top h-32 w-32 md:h-36 md:w-36 bg-slate-200" alt="Voter" />
            </div>
            <div className="flex-1 flex flex-col space-y-1.5">
                <div className={ showResult ? ``: `hidden`}>
                    <div className="my-2 px-1 py-1 rounded border-2 border-blue-950/20 text-sm md:text-base text-blue-950/80 md:text-blue-950/80 bg-white font-bold md:font-bold space-x-2">
                        <span className="px-0.5 tracking-wider">45656</span>
                        <span className="p-0.5 px-1.5 text-sm md:text-base italic rounded border bg-red-100 tracking-wide">50.5%</span>
                    </div>
                    { winner && <h3 className="px-2 w-fit rounded bg-green-500 text-xs md:text-sm text-white font-bold italic">WINNER</h3>}
                </div>
                <h3 className="text-xs md:text-base text-gray-600 font-bold italic">Omono</h3>
                <div className="w-full flex items-center justify-between">
                <h3 className="w-fit text-3xl text-gray-500 font-bold tracking-widest">#2</h3>
                
                {/* <button className="p-0.5 px-2 text-[0.6rem] rounded bg-green-400 text-gray-800 font-extrabold tracking-widest">VOTED</button>
                <button className="p-0.5 px-2 text-[0.6rem] rounded bg-red-200 text-gray-900 font-extrabold tracking-widest">NOT VOTED</button> */}
                </div>
            </div>
        </div>
        <div className="pt-1 px-1">
            <h3 className="text-[0.68rem] md:text-sm text-blue-950/80 md:text-gray-600 font-bold md:font-bold uppercase">Ebenezer Kwabena Blay Ackah</h3>
        </div>
    </div>
  )
}

export default CandidateCard