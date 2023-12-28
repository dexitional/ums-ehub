import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/dric/PageTitle'
import FunderCardItem from '../../components/dric/FunderCardItem'
import FunderListView from '../../components/dric/FunderListView'
import Service from '../../utils/dricService'
import { redirect, useLoaderData } from 'react-router'

type Props = {}

 export async function action({ params }) {
    await Service.deleteFunder(params.funderId);
    return redirect("/dric/funders");
 }

 export async function loader() {
    const data = await Service.fetchFunders();
    return { data }
}



 function PgDricClaims({}: Props) {

  const [ view, setView ] = useState('card')
  const { data }: any = useLoaderData()
  
  return (
    <div className="md:pl-10 p-4 md:p-6 space-y-4 md:space-y-10">
      <PageTitle title="Funders" createtext="New Funder" createlink="create" setView={setView} view={view} />
      <div className="">
         { view == 'card' && (
            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              { data && data.map((row:any) => (<FunderCardItem key={row.id} data={row} /> ))}
              { !data && (<div className="p-3 border rounded-xl"><h1 className="w-full text-center text-gray-400/70 text-[0.65rem] font-semibold tracking-widest uppercase">No Records ...</h1></div>)}
            </div>
          )}

         { view == 'list' && (
           <FunderListView data={data} />
         )}
         
      </div>
    </div>
  )
}

export default PgDricClaims