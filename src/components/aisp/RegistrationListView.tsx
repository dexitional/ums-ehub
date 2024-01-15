import React from 'react'
import RegistrationListItem from './RegistrationListItem';
import Service from '../../utils/aisService'
import { useUserStore } from '../../utils/authService';
import toast from 'react-hot-toast';

type Props = { 
  data?: any;
  title?: string;
  
  
}

function RegistrationListView({ title,data }: Props) {
  
  const courses  = useUserStore(state => state.courses)
  
  const chosenCredit = data?.courses?.reduce((sum,cur) => {
     const isChosen = courses.find((course:any) => course == cur.code);
     if(isChosen) return (sum+cur.credit)
     return (sum+0)
  },0)
  
  const reset = () => {
    useUserStore.setState({ courses: [] })
  }

  const submit = async () => {
     const cdata = data.courses?.filter((row:any) => {
          const isChosen = courses.find((course:any) => course == row.code);
          return !!isChosen 
      })

     if(cdata.length){
        const resp = await Service.postRegistration(cdata)
        console.log(resp);
     } else{
       toast.error("Please select your courses")
     }
  }

  
  return (
    <div className="space-y-2">
      <div className="px-3 flex flex-col md:flex-row items-center justify-between">
        <h1 className="w-full text-sm md:text-base font-bold font-roboto tracking-wider text-primary-accent/80 flex flex-col md:flex-row justify-between">
          <span>{title}</span>
          { courses.length ? <button onClick={reset} className="px-3 py-0.5 bg-primary-accent/80 text-xs md:text-sm text-white md:font-bold">RESTART SELECTION</button> : <div className="px-3 py-1 italic text-sm font-medium rounded border border-primary-accent/40">Please Choose your Courses and Submit!</div>}
        </h1>
      </div>
      <div className="pt-6 grid grid-cols-1 gap-y-4 border bg-slate-50/50 rounded-xl">
        <div className="px-6 pb-4  hidden md:grid grid-cols-6 place-items-center border-b border-slate-200 text-xs text-primary font-sans font-semibold uppercase tracking-widest">
            <div className="place-self-start">Code</div>
            <div className="col-span-2 place-self-start">Course</div>
            <div>Credit</div>
            <div>Type</div>
            <div>Action</div>
        </div>
        <div className="grid grid-cols-1 text-sm text-slate-600 font-roboto font-medium tracking-wider">
          { data?.courses && data?.courses?.map((row:any) => (<RegistrationListItem key={row.id} row={row} />))}
          { !data && (<h1 className="w-full text-center text-gray-400 text-[0.65rem] font-semibold tracking-widest uppercase">No Record ...</h1>)}
        </div>
        { courses && 
        <div className="px-6 pb-4 grid grid-cols-1 md:grid-cols-6 gap-y-4 md:place-items-center border-slate-200 text-xs text-primary/70 font-roboto font-semibold uppercase tracking-widest">
            <div className="col-span-2 place-self-start flex items-center justify-between">
               { courses.length ? <button onClick={submit} className="px-5 py-2 bg-primary/70 rounded text-white font-roboto font-medium text-xs tracking-[0.17rem] uppercase">Submit Registration</button>: null }
            </div>
            <div className="md:col-span-2 flex items-center justify-between"><span>Chosen Credits:&nbsp;&nbsp;&nbsp;<span className="text-primary-accent text-sm">{chosenCredit}</span></span></div>
            <div className="md:col-span-2 flex items-center justify-between"><span>Maximum Credits:&nbsp;&nbsp;&nbsp;<span className="text-primary-accent text-sm">Not Set</span></span></div>
        </div>
        }
      </div>
    </div>
  )
}

export default RegistrationListView