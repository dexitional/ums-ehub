import React from 'react'

function ControlCard({ title,desc,action, data }) {
  return (
    <label htmlFor={`${action}`} className=" cursor-pointer overflow-hidden relative px-3 p-2 w-full h-fit border border-slate-300 rounded flex space-x-3 items-start">
        <div className="relative h-8 w-8 md:h-10 md:w-10 rounded-full bg-slate-200 flex items-center justify-center">
            {/* <img src={`https://ehub.ucc.edu.gh/api/photos/?tag=15664`} className="rounded object-cover object-top h-10 w-10 md:h-14 md:w-14 bg-slate-200" alt="Voter" /> */}
            <input className="h-6 w-6 rounded-full focus:outline-none focus:ring-0  checked:bg-blue-950/80 checked:text-blue-950/80" id={action} type="checkbox" name="" />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="text-[0.68rem] md:text-[0.87rem] text-blue-950/80 md:text-blue-950/80 font-bold md:font-bold">{title}</h3>
            <h3 className="text-xs md:text-sm text-gray-600 font-medium italic">{desc}</h3>
        </div>
        <button className='px-2 py-1 absolute -right-5 top-4 rotate-90  bg-slate-100 text-blue-950/80 text-xs font-bold'>PUBLIC</button>
       
    </label>
  )
}

export default ControlCard