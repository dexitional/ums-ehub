import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/dric/PageTitle'
import Service from '../../utils/dricService'
import { redirect, useLoaderData } from 'react-router'
import PaymentCardItem from '../../components/dric/PaymentCardItem'
import PaymentListView from '../../components/dric/PaymentListView'

type Props = {}

 export async function action({ params }) {
    await Service.deletePayment(params.paymentId);
    return redirect("/dric/payments");
 }

 export async function loader() {
    const data = await Service.fetchPayments();
    return { data }
}



 function PgDricPayments({}: Props) {

  const [ view, setView ] = useState('card')
  const { data }: any = useLoaderData()
  
  return (
    <div className="md:pl-10 p-4 md:p-6 space-y-4 md:space-y-10">
      <PageTitle title="Payments" createtext="New Payment" createlink="create" setView={setView} view={view} />
      <div className="">
         { view == 'card' && (
            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              { data && data.map((row:any) => (<PaymentCardItem key={row.id} data={row} /> ))}
              { !data && (<div className="p-3 border rounded-xl"><h1 className="w-full text-center text-gray-400/70 text-[0.65rem] font-semibold tracking-widest uppercase">No Records ...</h1></div>)}
            </div>
          )}

         { view == 'list' && (
           <PaymentListView data={data} />
         )}
         
      </div>
    </div>
  )
}

export default PgDricPayments