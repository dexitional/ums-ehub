import React from 'react'
import VoterCard from './VoterCard'
import ControlCard from './ControlCard'

function PgControl() {
  return (
    <div className="py-3 px-3 flex-1 h-full rounded bg-[#f1f1f1]/30 shadow-inner shadow-gray-500/30 space-y-6">
        <h1 className="px-4 py-2.5 flex flex-col md:flex-row md:items-center md:justify-between space-y-1 md:space-y-0 text-xl rounded bg-blue-950/80 font-semibold text-white">
          <span className="text-white">ADMIN CONTROLS</span>
          {/* <span className="p-0.5 px-2 rounded bg-amber-400 text-base text-blue-950 font-extrabold tracking-wider">130232</span> */}
          <div className='px-1 py-1 rounded border-2 border-white flex items-center space-x-2'>
            <span className="px-1 text-sm">ELECTION PROCESS</span>
            <select className="p-0.5 px-1 rounded bg-purple-50 text-sm text-blue-950 font-bold tracking-wider focus:ring-0 focus:outline-none" name="" id="">
              <option>STAGED</option>
              <option>STARTED</option>
              <option>ENDED</option>
            </select>
          </div>
        </h1>
        <div className="py-4 px-2 rounded shadow-inner shadow-gray-500/20 bg-white space-y-4">
        <div className="px-2 py-2 bg-zinc-200/50 shadow-inner">
            <div className="px-2 py-2 bg-white rounded">
              <div className="w-full h-32 grid grid-cols-1 md:grid-cols-2 gap-2 place-content-start overflow-y-scroll">
                  <ControlCard title="PUBLIC MONITOR" action="public" desc="Percentage statistics in realtime" data={null} />
                  <ControlCard title="VIP MONITOR" action="vip" desc="Actual statistics in realtime" data={null} />
                  <ControlCard title="FINAL RESULTS" action="result" desc="Actual statistics in realtime" data={null} />
                  <ControlCard title="VOTER STATUS" action="vstatus" desc="Voting status of eligible electors" data={null} />
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PgControl