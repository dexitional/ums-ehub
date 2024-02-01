import React, { useRef } from 'react'
import PrintHeader from '../print/PrintHeader'
import { useReactToPrint } from "react-to-print";
import ReactHtml from "html-react-parser";
import { dummyAUCCApplicant, loadPlacerData } from '../../utils/util';

type Props = {
    data: any;
}

function LetterTemplate({ data }: Props) {
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const dm = dummyAUCCApplicant;

  return (
    <div className="relative scale-[85%] print:scale-[85%] print:-mt-14" ref={printRef}>
        <button onClick={handlePrint} className="absolute -top-44 -left-10 print:hidden px-4 py-1 m-4 bg-primary-accent text-white font-bold uppercase">Print</button>
        <PrintHeader />
        <main className="w-full print:text-[0.79rem] print:font-poppins">
           <div className="mb-4 space-y-6">
               <h1 className="text-primary-accent text-xl print:text-base font-semibold tracking-widest">OFFER OF ADMISSION</h1>
               <div className="space-y-6 print:space-y-3">
                    <address className="print:text-xs">
                        <p className="text-primary-dark font-semibold uppercase not-italic">REFERENCE: 240921009</p>
                        <p className="text-primary-dark font-semibold uppercase not-italic">Ebenezer Kwabena Blay Ackah</p>
                    </address>
                    <p>Dear Samuel,</p>
               </div>
           </div>
           { ReactHtml(loadPlacerData(data?.template,dm)) }
        </main>
    </div>
  )
}

export default LetterTemplate