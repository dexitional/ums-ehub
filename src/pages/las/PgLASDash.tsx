import React, { useLayoutEffect } from 'react'
import { Outlet, redirect } from 'react-router'
import LASChosen from '../../components/las/LASChosen'
import { useUserStore } from '../../utils/authService'
import Service from '../../utils/evsService'

type Props = {}

export async function action({ request }){
  const formData = await request.formData()
  let data = Object.fromEntries(formData);
      data.vote = Number(data.vote);
  let resp = await Service.postVote(data);
  if(resp){
    const loadStudentVote = useUserStore.getState().loadStudentVote;
    loadStudentVote();
  }
  return redirect(`/las/dash`);
} 

function PgLASDash({}: Props) {
  
  const loadStudentVote = useUserStore(state => state.loadStudentVote)
  useLayoutEffect(() => {
    loadStudentVote();
  },[])
  
  const lasChosen = useUserStore(state => state.lasChosen);
  
  return (
    <main className="p-4 md:p-8 grid grid-cols-1 gap-y-3 md:gap-y-10">
    
    <section className="grid md:grid-cols-3 md:gap-4">
        <section className="md:col-span-2">
            <div className="py-4 px-2 md:px-6 md:py-4 bg-blue-50/40 rounded-2xl">
                <h1 className="text-sm md:text-2xl tracking-widest text-center font-noto font-semibold text-blue-950/60">BEST LECTURER NOMINATION SYSTEM</h1>
            </div>
        </section>
        <section className="hidden md:flex flex-col items-center col-span-1">
           <div className="p-6 min-h-fit w-full border rounded-3xl"></div>
        </section>
    </section>
    
    {/* Election Section */}
    <section className="md:p-4 grid md:grid-cols-3 gap-4 rounded-2xl bg-blue-50/40">
        <div className="md:py-2 md:col-span-2 rounded-xl bg-white/80">
           <div className="p-1 md:py-2 md:px-3 grid gap-y-3 overflow-y-scroll [&_dl]:border-b [&_dl]:border-dashed [&_dl]:border-spacing-60 [&_dl]:border-blue-200/60 [&_dl]:pb-4 last:[&_dl]:border-0 last:[&_dl]:pb-0">
              <Outlet />
           </div>
        </div>
        
        <div className="p-0 md:p-4 rounded-xl bg-white/80">
          <h1 className="px-2 md:px-3 py-1 w-fit -skew-x-12  rounded bg-green-950/50 text-white font-bold tracking-wider">Selected Candidate</h1>
          <div className="p-2 md:py-4 md:px-3 min-h-fit grid gap-y-6 overflow-y-scroll [&_dl]:border-b [&_dl]:border-dashed [&_dl]:border-spacing-60 [&_dl]:border-pink-200/60 [&_dl]:pb-4 last:[&_dl]:border-0 last:[&_dl]:pb-0">
            <LASChosen data={lasChosen}/>
          </div>
        </div>
    </section>
  </main>
  )
}

export default PgLASDash