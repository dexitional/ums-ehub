import React from 'react'
import ListHeading from './ListHeading';
import { useUserStore } from '../../utils/authService';
import toast from 'react-hot-toast';

type Props = {
    row: any;
}

function RegistrationSlipItem({ row }: Props) {
  console.log(row)
  
  return (
    <div className={`px-3 md:px-6 pb-4 grid md:grid-cols-5 gap-y-1 md:gap-y-0 md:gap-x-2 md:place-items-center font-roboto font-medium text-xs text-gray-500 border-b border-slate-200 hover:bg-slate-50/50 group tracking-widest`}>
        <div className="capitalize flex flex-col space-y-2 md:place-self-start">
          <ListHeading title="Code"/>
          <span className="px-2 md:px-0">{row?.courseId}</span>
        </div>
        
        <div className="md:col-span-2 md:place-self-start flex flex-col space-y-2">
           <ListHeading title="Course"/>
           <span className="px-2 md:px-0">{row?.course?.title}</span>
        </div>
        <div className="capitalize flex flex-col space-y-2">
          <ListHeading title="Credit"/>
          <span className="px-2">{row?.course?.creditHour}</span>
        </div>
        <div className="capitalize flex flex-col space-y-2">
          <span className="px-2 uppercase">{row?.type == 'R' ? 'Resit':''}</span>
        </div>
        
    </div>
  )
}

export default RegistrationSlipItem