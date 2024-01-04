import React, { useState } from 'react'
import SubPageTitle from '../../components/ais/SubPageTitle'
// @ts-ignore
import Logo from '../../assets/img/logo/mlk/logo.png'
import { MdLocationOn, MdOutlineFiberPin, MdOutlineMarkEmailUnread, MdOutlineNumbers } from 'react-icons/md'
import { FaPhoneAlt, FaTransgender } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'
import { Form, Link } from 'react-router-dom'
import Service from '../../utils/aisService'
import { redirect, useLoaderData } from 'react-router'
import moment from 'moment'
import { TbEdit, TbHomeCheck } from 'react-icons/tb'
import AISPBioCard from '../../components/aisp/AISPBioCard'
import { FaNewspaper, FaRegAddressCard, FaRegCalendar } from 'react-icons/fa6'
import { RiCommunityLine } from 'react-icons/ri'
import { BsCalendarRange } from 'react-icons/bs'
import { BiMoneyWithdraw } from 'react-icons/bi'

type Props = {}


// Delete Action for Phase
export async function action({ params }) {
  await Service.deleteStudent(params.studentId);
  return redirect(`/ais/students/${params.studentId}`);
}

// Loader for Single Project
export async function loader({ params }){
  const data = await Service.fetchStudent(params.studentId)
   return { data }
}

function PgAISStudent({}: Props) {

  const { data } :any = useLoaderData();
  console.log(data)

  return (
    <main className="md:pl-10 p-3 md:p-6 space-y-3 md:space-y-10">
      <SubPageTitle title={``} page="STUDENT PROFILE" />
      <div className="p-3 md:p-6 border bg-slate-50/50 rounded-xl md:space-y-6 space-y-4 ">
         <section className="relative flex space-x-2 md:space-x-6">
            <div className="hidden md:block p-2 md:p-4 h-16 w-16 md:h-32 md:w-32 border rounded-xl shadow-lg bg-white">
              <img src={Logo} className="h-14 w-14 md:h-24 md:w-24 object-contain" />
            </div>
            <Link to={`edit`} className="p-1 md:py-1.5 md:px-2 absolute right-0 top-0 bg-slate-50 border border-gray-200 rounded flex">
                {/* <span className="text-gray-400">EDIT</span> */}
                <TbEdit className="h-5 w-5 text-gray-300"/>
            </Link>
            <div className="flex-1 flex flex-col space-y-4 md:space-y-3">
              <div className="flex space-x-2">
                  <div className="block md:hidden p-2 md:p-4 h-16 w-16 border rounded-xl shadow-lg bg-white">
                    <img src={Logo} className="h-12 w-12 object-contain" />
                  </div>
                  <h1 className="text-md md:text-3xl md:tracking-wide leading-5 font-semibold text-primary/70">{data?.fname} {data?.mname && data?.mname+' '}{data?.lname}</h1>
              </div>
              <div className="w-full flex flex-col md:flex-row md:items-center space-x-2 text-zinc-400 text-lg">
                <div className="flex items-center space-x-2"> 
                    <span className="tracking-wider text-xs md:text-lg capitalize">{data?.indexno}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <span className="text-xs md:text-lg capitalize">{data?.phone}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                 </div>
                 <div className="flex items-center space-x-1">
                    <MdLocationOn className="h-5 w-5 text-primary/70" />
                    <span className="text-sm md:text-lg capitalize">{data?.program?.longName}</span>
                </div>
                
              </div>
              <p className="text-gray-400 md:text-gray-500 text-xs md:text-sm font-noto">{data?.address}</p>
            </div>
         </section>

        <section>
            <nav className="p-2 w-full md:p-3 flex flex-col md:flex-row space-x-4 space-y-3 md:space-y-0 border border-primary/5 rounded-md md:rounded-xl bg-primary/5 text-primary-dark/70 text-xs font-noto font-semibold tracking-wider">
                <div className="px-4 py-1 min-w-48 shadow-md rounded-md bg-primary-dark/60 font-bold text-white">PROFILE</div>
                <div className="px-4 py-1 min-w-48 border border-primary/10 rounded-md bg-primary/10 fle">ACADEMIC STATEMENT</div>
                <div className="px-4 py-1 min-w-48 border border-primary/10 rounded-md bg-primary/10">FINANCE STATEMENT</div>
                <div className="px-4 py-1 min-w-48 border border-primary/10 rounded-md bg-primary/10">ACCOUNT & ACTIVITY</div>
                <div className="px-4 py-1 min-w-48 border border-primary/10 rounded-md bg-primary/10">ID CARD</div>
            </nav>
        </section>
         <section className="gap-y-2">
             <div className="p-2 w-full md:py-4 md:px-6 flex flex-col space-y-3 md:space-y-6 border rounded-md md:rounded-xl bg-white">
               <div className="flex w-full flex-1 flex-col md:flex-row space-between space-y-2 md:space-y-0 md:space-x-10">
                  <div className="flex-1 space-y-2">
                    <AISPBioCard label="Full Name" value={`${data?.fname} ${data?.mname && data?.mname+' '}${data?.lname}`} Icon={ImProfile} />
                    <AISPBioCard label="Gender" value={data?.gender == 'M' ? 'MALE':'FEMALE'} Icon={FaTransgender} />
                    <AISPBioCard label="Date of Birth" value={data?.dob && moment(data?.dob).format('MMMM DD, YYYY').toUpperCase() || 'Not Set'} Icon={FaRegCalendar} />
                    <AISPBioCard label="Hometown" value={data?.hometown || 'Not Set'} Icon={TbHomeCheck} />
                    <AISPBioCard label="Phone Number" value={data?.phone || 'Not Set'} Icon={FaPhoneAlt} />
                    <AISPBioCard label="Email Address" value={data?.email?.toUpperCase() || 'Not Set'} Icon={MdOutlineMarkEmailUnread} />
                    <AISPBioCard label="Residential Address" value={data?.address?.toUpperCase() || 'Not Set'} Icon={FaRegAddressCard} />
                    <AISPBioCard label="Guardian Name" value={data?.indexno} Icon={MdOutlineFiberPin} />
                    <AISPBioCard label="Guardian Contact" value={data?.id} Icon={BsCalendarRange} />
                    <AISPBioCard label="Region" value={data?.region?.title || 'Not Set'} Icon={BiMoneyWithdraw} />
                    <AISPBioCard label="Country" value={data?.country.longName || 'Not Set'} Icon={RiCommunityLine} />
                  </div>
                  <div className="flex-1 space-y-2">
                     <AISPBioCard label="Religion" value={data?.religion?.title || 'Not Set'} Icon={BiMoneyWithdraw} />
                    <AISPBioCard label="Disability" value={data?.disability?.title || 'None'} Icon={BiMoneyWithdraw} />
                     <AISPBioCard label="Student Number" value={`${data?.id}`} Icon={ImProfile} />
                    <AISPBioCard label="Index Number" value={data?.indexno || 'Not Set'} Icon={TbHomeCheck} />
                    <AISPBioCard label="Programme" value={data?.email?.toUpperCase() || 'Not Set'} Icon={MdOutlineMarkEmailUnread} />
                    <AISPBioCard label="Department" value={data?.phone || 'Not Set'} Icon={FaPhoneAlt} />
                    <AISPBioCard label="Institutional Email" value={data?.address?.toUpperCase() || 'Not Set'} Icon={FaRegAddressCard} />
                    <AISPBioCard label="Ghana Card Number" value={data?.end_date && moment(data?.end_date).format('MMMM, YYYY').toUpperCase() || 'Not Set'} Icon={BsCalendarRange} />
                    <AISPBioCard label="Date of Admission" value={data?.dob && moment(data?.dob).format('MMMM DD, YYYY').toUpperCase() || 'Not Set'} Icon={FaRegCalendar} />
                    <AISPBioCard label="Student Category" value={data?.entryGroup == 'GH' ? 'GHANAIAN': 'INTERNATIONAL'} Icon={MdOutlineFiberPin} />
                    <AISPBioCard label="Academic Status" value={data?.completeStatus ? 'COMPLETED': 'ACTIVE STUDENT'} Icon={MdOutlineFiberPin} />
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
                      <FaNewspaper className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
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

export default PgAISStudent