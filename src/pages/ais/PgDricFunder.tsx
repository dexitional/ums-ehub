import React, { useState } from 'react'
import SubPageTitle from '../../components/dric/SubPageTitle'
// @ts-ignore
import Logo from '../../assets/img/logo/ucc/logo.png'
import { MdLocationOn } from 'react-icons/md'
import { FaBook, FaEnvelope, FaGlobe, FaNewspaper, FaPhone } from 'react-icons/fa'
import Service from '../../utils/dricService'
import { useLoaderData } from 'react-router'
import { Link } from 'react-router-dom'
import { TbEdit } from 'react-icons/tb'
import moment from 'moment'

type Props = {}

export async function loader({ params }){
  const data = await Service.fetchFunder(params.funderId)
   return { data }
}

function PgDricFunder({}: Props) {
  const { data } :any = useLoaderData();
  return (
    <main className="md:pl-10 p-3 md:p-6 space-y-3 md:space-y-10">
      <SubPageTitle title={data?.title} page="Funders" />
      <div className="p-3 md:p-6 border bg-slate-50/50 rounded-xl md:space-y-6 space-y-4 ">
         <section className="relative flex space-x-2 md:space-x-6">
            <div className="hidden md:block p-2 md:p-4 h-16 w-16 md:h-48 md:w-44 border rounded-xl shadow-lg bg-white">
              <img src={Logo} className="h-14 w-14 md:h-40 md:w-40 object-contain" />
            </div>
            <Link to={`edit`} className="p-1 md:py-1.5 md:px-2 absolute right-0 top-0 bg-slate-50 border border-gray-200 rounded flex">
                {/* <span className="text-gray-400">EDIT</span> */}
                <TbEdit className="h-5 w-5 text-gray-300"/>
            </Link>
            <div className="flex-1 flex flex-col space-y-4 md:space-y-3">
              <div className="flex space-x-2">
                  <div className="block md:hidden p-2 md:p-4 h-16 w-16 md:h-48 md:w-44 border rounded-xl shadow-lg bg-white">
                    <img src={Logo} className="h-14 w-14 md:h-40 md:w-40 object-contain" />
                  </div>
                  <h1 className="text-md md:text-3xl md:tracking-wide leading-5 font-semibold text-blue-950/70">{data?.title}</h1>
              </div>
              <div className="w-full flex flex-col md:flex-row md:items-center space-x-2 text-zinc-400 text-lg">
                 <div className="space-x-2"> 
                    <span className="tracking-wider text-xs md:text-lg capitalize">{data?.country?.longName}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="text-xs md:text-lg capitalize">{data?.location}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                 </div>
                 <div className="flex items-center space-x-1">
                    <MdLocationOn className="h-5 w-5 text-blue-950/70" />
                    <span className="text-sm md:text-lg capitalize">{data?.address}</span>
                </div>
              </div>
              <p className="text-gray-400 md:text-gray-600 text-xs md:text-base">{data?.description}</p>
            </div>
         </section>

         <section className="grid md:grid-cols-2 md:gap-x-8 md:gap-y-0 gap-y-2">
             {/* Record */}
             <div className="p-2 md:py-4 md:px-6 flex flex-col space-y-3 md:space-y-6 border rounded-md md:rounded-xl bg-white">
               <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-base font-semibold rounded-md bg-blue-950/60 text-white tracking-widest uppercase -skew-x-6">CONTACT</h1>
               <div className="md:pl-6 space-y-4">
                  <div className="flex items-center space-x-3 md:space-x-6">
                      <FaPhone className="rotate-90 w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <span className="text-xs md:text-base text-gray-500">{data?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-6">
                      <FaEnvelope className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <span className="text-xs md:text-base text-gray-500">{data?.email}</span>
                  </div>
                  {/* <div className="flex items-center space-x-6">
                      <MdLocationOn className="h-6 w-6 text-blue-950/70" />
                      <span className="text-base text-gray-500 italic">{data?.address}</span>
                  </div> */}
                  <div className="flex items-center space-x-3 md:space-x-6">
                      <FaGlobe className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <span className="text-xs md:text-base text-gray-500 italic">{data?.publicPage}</span>
                  </div>
                </div>
             </div>
             {/* Secure Access */}
             <div className="p-2 md:py-4 md:px-6 flex flex-col space-y-3 md:space-y-6 border rounded-md md:rounded-xl bg-white">
               <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-base font-semibold rounded-md bg-blue-950/60 text-white tracking-widest uppercase -skew-x-6">PORTAL ACCESS</h1>
               <div className="md:pl-6 space-y-4">
                  {/* <div className="flex items-center space-x-6">
                      <FaGlobe className="h-5 w-6 text-blue-950/70" />
                      <span className="text-base text-gray-500 italic">https://google.com</span>
                  </div> */}
                  <div className="flex items-center md:space-x-6 space-x-2">
                      <FaGlobe className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <div className="flex items-center space-x-2">
                         <span className="py-0.5 px-0.5 md:px-2 bg-slate-200 font-semibold text-[0.6rem] md:text-xs text-gray-500 uppercase">ACCESS PAGE</span>
                         <code className="text-xs md:text-base text-gray-500">{data?.accessPage}</code>
                      </div>
                  </div>
                  <div className="flex items-center md:space-x-6 space-x-2">
                      <FaGlobe className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <div className="flex items-center space-x-2">
                         <span className="py-0.5 px-0.5 md:px-2 bg-slate-200 font-semibold text-[0.6rem] md:text-xs text-gray-500 uppercase">Username</span>
                         <code className="text-xs md:text-base text-gray-500">{data?.userName}</code>
                      </div>
                  </div>
                  <div className="flex items-center md:space-x-6 space-x-2">
                      <FaGlobe className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <div className="flex items-center space-x-2">
                         <span className="py-0.5 px-0.5 md:px-2 bg-slate-200 font-semibold text-[0.6rem] md:text-xs text-gray-500 uppercase">Password</span>
                         <code className="text-xs md:text-base text-gray-500">{data?.password}</code>
                      </div>
                  </div>
                </div>
             </div>
         </section>

         { data?.projects?.length ? (
         <section>
            {/* Project History */}
            <div className="p-2 md:py-4 md:px-6 flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-10 border rounded-md md:rounded-xl bg-white">
               <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-base font-semibold rounded-md bg-blue-950/60 text-white tracking-widest uppercase -skew-x-6">PROJECTS FUNDED</h1>
               <div className="md:pl-6 space-y-4">
                { data?.projects?.map((row:any) => (
                  <div key={row.id} className="flex md:items-center space-x-6">
                      <FaNewspaper className="w-3 h-3 md:h-5 md:w-6 text-blue-950/70" />
                      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
                         <pre className="text-xs md:text-base text-gray-500">{row.title}</pre>
                         <span className="py-0.5 px-2 w-fit bg-slate-200 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">START - { moment(row.start).format('MMM DD, YYYY') }</span>
                         <span className="py-0.5 px-2 w-fit bg-slate-200 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">END - { moment(row.end).format('MMM DD, YYYY') }</span>
                      </div>
                  </div>
                ))}
                </div>
             </div>
         </section>
         ): null }
         
        
      </div>
    </main>
  )
}

export default PgDricFunder