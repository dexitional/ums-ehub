import React from 'react'
import { useUserStore } from '../../utils/authService';
import Service from '../../utils/aisService'
import PrintHeader from './PrintHeader';
import RegistrationSlipItem from '../aisp/RegistrationSlipItem';
import { useLoaderData } from 'react-router';
import moment from 'moment';


type Props = {}

export async function loader() {
    const user = useUserStore.getState().user;
    const data = await Service.fetchRegistration(user?.user?.tag);
    return { data }
  }

function PrintRegisterSlip({}: Props) {
  const { data } :any = useLoaderData();
  const totalCredit  = data.reduce((sum,cur) => sum+cur.course.creditHour,0)
  
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white print:m-0 print:scale-90">
        <div className="my-20 mx-auto px-16 py-20 w-full max-w-6xl rounded border shadow-sm shadow-slate-300 print:px-6 print:py-8 print:m-0 print:w-full print:max-w-screen print:shadow-none print:border-0 print:scale-100">
            <PrintHeader /> 
           
            <div className="my-10 mx-auto max-w-4xl w-full flex flex-col space-y-8" style={{'font': "16px 'Arial Narrow MT Std', sans-serif" }}>
               <h2 className="text-lg text-primary tracking-widest underline font-bold font-roboto text-center">2023/2024 SECOND SEMESTER REGISTRATION SLIP</h2>
               <div className="pt-6 grid grid-cols-1 gap-y-4 border bg-slate-50/50 rounded-xl">
                    <div className="px-6 pb-4 hidden md:grid print:grid grid-cols-5 place-items-center border-b border-slate-200 text-xs text-primary font-sans font-semibold uppercase tracking-widest">
                        <div className="place-self-start">Code</div>
                        <div className="col-span-2 place-self-start">Course</div>
                        <div>Credit</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="grid grid-cols-1 text-base text-primary font-roboto font-medium tracking-wider">
                    { data?.map((row:any) => (<RegistrationSlipItem key={row.id} row={row} />))}
                    { !data.length && (<h1 className="w-full text-center text-gray-400 text-[0.65rem] font-semibold tracking-widest uppercase">No Courses</h1>)}
                    </div>
                    
                    <div className="px-6 pb-4 grid grid-cols-1 md:grid-cols-5 print:grid-cols-6 gap-y-4 md:place-items-center border-slate-200 text-xs text-primary/70 font-roboto font-semibold uppercase tracking-widest">
                        <div className="col-span-2 place-self-start flex items-center justify-between">
                        
                        </div>
                        <div className="md:col-span-2 flex items-center justify-between"><span>Total Credits:&nbsp;&nbsp;&nbsp;<span className="text-primary-accent text-sm">{totalCredit}</span></span></div>
                        <div className="md:col-span-2 flex items-center justify-between"><span>Date of Registration:&nbsp;&nbsp;&nbsp;<span className="text-primary-accent text-sm">{moment().format("MMM DD, YYYY") || 'Not Set'}</span></span></div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrintRegisterSlip