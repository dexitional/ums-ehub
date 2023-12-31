import React from 'react'

function VoterCard({ data }) {
  return (
    <div className="px-3 p-2 w-full h-fit border border-slate-300 rounded flex space-x-3 items-start">
        <div className="relative h-10 w-10 md:h-14 md:w-14 rounded bg-slate-200">
            <img src={`https://ehub.ucc.edu.gh/api/photos/?tag=15664`} className="rounded object-cover object-top h-10 w-10 md:h-14 md:w-14 bg-slate-200" alt="Voter" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="text-[0.68rem] md:text-[0.87rem] text-blue-950/80 md:text-blue-950/80 font-bold md:font-bold">Ebenezer Kwabena Blay Ackah</h3>
            <h3 className="text-xs md:text-sm text-gray-600 font-medium italic">ebenezerkb.ackah@gmail.com</h3>
            <div className="w-full flex items-center justify-between">
              <h3 className="w-fit text-xs text-gray-500 font-bold tracking-widest">15666</h3>
              {/* <button className="p-0.5 px-2 text-[0.6rem] rounded bg-green-400 text-gray-800 font-extrabold tracking-widest">VOTED</button>
              <button className="p-0.5 px-2 text-[0.6rem] rounded bg-red-200 text-gray-900 font-extrabold tracking-widest">NOT VOTED</button> */}
            </div>
            
        </div>
    </div>
  )
}

export default VoterCard