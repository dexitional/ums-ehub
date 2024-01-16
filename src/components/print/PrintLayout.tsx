import React, { useRef } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet, useNavigation } from 'react-router'
import Loader from '../Loader'
import { useReactToPrint } from 'react-to-print';

type Props = {
    children: React.ReactNode
}

function PrintLayout({ children }: Props) {

  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  const printRef:any = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });


  return (
    <div className="w-full h-screen flex flex-col justify-between">
    <Header />
    <main className="w-full flex-1 flex flex-col md:overflow-y-scroll">
      <section className="md:mx-auto w-full md:max-w-7xl flex">
         <div ref={printRef} className={`${loading && 'overflow-hidden'} flex-1`}>
           { loading && <Loader /> }
           <div className="mx-auto mt-6 w-full max-w-6xl print:hidden">
              <button className="px-4 py-1 bg-primary-accent text-black font-bold" onClick={handlePrint}>Print</button>
           </div>
           <Outlet />
         </div>
      </section>
    </main>
    <Footer />
</div>
  )
}

export default PrintLayout