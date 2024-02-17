import React from 'react'
import { Outlet } from 'react-router'
import { useUserStore } from '../../utils/authService';
import { TbSquareRoundedNumber1, TbSquareRoundedNumber1Filled, TbSquareRoundedNumber2, TbSquareRoundedNumber2Filled, TbSquareRoundedNumber3, TbSquareRoundedNumber3Filled, TbSquareRoundedNumber4, TbSquareRoundedNumber4Filled, TbSquareRoundedNumber5, TbSquareRoundedNumber5Filled, TbSquareRoundedNumber6, TbSquareRoundedNumber6Filled, TbSquareRoundedNumber7, TbSquareRoundedNumber7Filled } from 'react-icons/tb';

type Props = {}

function AMSPSwitcher({}: Props) {
  return (
    <main className="p-2 md:py-6 max-w-6xl w-full space-y-4">
      {/* Steps */}
        <section className="w-full">
          <div className="mx-auto px-10 py-2 w-fit flex flex-wrap items-center justify-center space-x-10 bg-primary/10 rounded-full ">
            <TbSquareRoundedNumber1  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber2  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber3  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber4  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber5  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber6  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber7  className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />

            {/* <TbSquareRoundedNumber1Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber2Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber3Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber4Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber5Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber6Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" />
            <TbSquareRoundedNumber7Filled className="h-10 w-10 text-primary/80 bg-white rounded-2xl" /> */}
            
          </div>
        </section>
        <section className="w-full">
            <Outlet />
        </section>
    </main>
  )
}

export default AMSPSwitcher