import React, { useRef, useState } from 'react'
import SubPageTitle from '../../components/ais/SubPageTitle'
// @ts-ignore
import Logo from '../../assets/img/logo/mlk/logo.png'
import { MdLocationOn, MdNumbers } from 'react-icons/md'
import { Form, Link } from 'react-router-dom'
import Service from '../../utils/aisService'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router'
import moment from 'moment'
import { TbEdit, TbPhotoCancel, TbPhotoEdit } from 'react-icons/tb'
import { FaMoneyCheckDollar, FaNewspaper } from 'react-icons/fa6'
import PgAISStudentProfile from './PgAISStudentProfile'
import SubNavLink from '../../components/ais/SubNavLink'
import { RiCommunityFill } from 'react-icons/ri'
import { HiUserAdd } from 'react-icons/hi'
import { GoPasskeyFill } from 'react-icons/go'

type Props = {}


// Delete Action for Phase
export async function action({ params }) {
  await Service.deleteSession(params.calendarId);
  return redirect(`/ais/calendars/${params.calendarId}`);
}

// Loader for Single Project
export async function loader({ params }){
  const data = await Service.fetchSession(params.calendarId)
  return { data }
}

function PgAISCalendar({}: Props) {
  const navigate = useNavigate()
  const { data } :any = useLoaderData();
  console.log(data)
  const fileRef:any = useRef(null)
  
  const stageAccess = async () => {
    const ok = window.confirm("Setup Student Portal Access ?")
    if(ok){
      await Service.stageStudentAccess(data?.id);
    }
  }

  const resetAccess = async () => {
    const ok = window.confirm("Reset Student Portal Password ?")
    if(ok){
      await Service.resetStudentAccess(data?.id);
    }
  }

  const changePhoto = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData();
          formData.append('photo',file);
          formData.append('tag',data?.id);
    console.log(`ais/student/${encodeURIComponent(data?.id)}/profile`)
    const resp = await Service.changePhoto(formData);
    if(resp) navigate(0)
  }

  const removePhoto = async () => {
    const ok = window.confirm("Reset Student Portal Password ?")
    if(ok){
      const resp = await Service.removePhoto(data?.id);
      if(resp) navigate(0)
    }
  }

  const generateIndex = async () => {
    const ok = window.confirm("Reset Student Portal Password ?")
    if(ok){
      const resp = await Service.generateIndex(data?.id);
      if(resp) navigate(0)
    }
  }

  const activateEntry = async () => {
    const ok = window.confirm("Reset Student Portal Password ?")
    if(ok){
      const resp = await Service.updateStudent(data?.id, { flagPardon: true });
      if(resp) navigate(0)
    }
  }

  return (
    <main className="md:pl-10 p-3 md:p-6 space-y-3 md:space-y-10">
      <SubPageTitle title={``} page="CALENDAR" />
      <div className="p-3 md:p-6 border bg-slate-50/50 rounded-xl md:space-y-6 space-y-4 ">
         <section className="relative flex space-x-2 md:space-x-6">
            <div className="hidden md:block p-2 md:p-2 h-16 w-16 md:h-24 md:w-24 border rounded-xl shadow-lg bg-white">
              <img src={Logo} className="h-12 w-12 md:h-20 md:w-20 object-contain" />
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
                  <h1 className="text-md md:text-3xl md:tracking-wide leading-5 font-semibold text-primary/70">{data?.title?.toUpperCase()}</h1>
              </div>
              <div className="w-full flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2 text-zinc-400 text-lg">
                 <div className="flex items-center space-x-2"> 
                    <span className="px-3 py-0.5 text-xs md:text-sm font-medium tracking-wider capitalize bg-primary rounded-md text-white">{data?.tag?.toUpperCase()}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <span className="tracking-wider text-xs md:text-base capitalize">{ data?.year }</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                    <span className="tracking-wider text-xs md:text-base capitalize">{ data?.semester }</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                 </div>
                 <div className="flex items-center space-x-2">
                    <RiCommunityFill className="md:h-5 md:w-5 text-primary/70" />
                    <span className="text-xs md:text-base tracking-wider font-medium capitalize">{data?.department?.title}</span>
                </div>
              </div>
              <p className="text-gray-400 md:text-gray-500 text-xs md:text-sm font-noto">{data?.department?.longName}</p>
            </div>
         </section>
         <section className="w-full">
            <div className="p-3 md:p-6 grid md:grid-cols-2 gap-2 md:gap-4 border bg-white rounded-xl">
              {/* Stage Account */}
              <button onClick={stageAccess} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
                <HiUserAdd className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
                <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Stage Semester Scoresheets</span>
              </button>
              {/* Reset Account */}
              <button onClick={resetAccess} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
                <GoPasskeyFill className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
                <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Activate Semester Progression</span>
              </button>
              {/* Index Number */}
              <button onClick={!data?.indexno ? generateIndex : undefined } className={`p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 ${data?.indexno ? 'bg-primary/5 border-primary/20 cursor-not-allowed':'bg-primary-accent/5 border-primary-accent/20' } border shadow`}>
                <GoPasskeyFill className={`${data?.indexno ? 'text-primary/60 border-primary/20':'text-primary-accent/60 border-primary-accent/20'} h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 rounded-full`} />
                <span className={`font-semibold text-sm md:text-base ${data?.indexno ? 'text-primary/50':'text-primary-accent/70'} font-noto`}>{data?.indexno ? 'Index Number Activated':'Set Session as Default'}</span>
              </button>
              {/* Pardon Registration */}
              <button onClick={!data?.assignLateSheet ? activateEntry : undefined } className={`p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 ${data?.assignLateSheet ? 'bg-primary/5 border-primary/20 cursor-not-allowed':'bg-primary-accent/5 border-primary-accent/20' } border shadow`}>
                <FaMoneyCheckDollar className={`${data?.assignLateSheet ? 'text-primary/60 border-primary/20':'text-primary-accent/60 border-primary-accent/20'} h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 rounded-full`} />
                <span className={`font-semibold text-sm md:text-base ${data?.assignLateSheet ? 'text-primary/50':'text-primary-accent/70'} font-noto`}>{data?.assignLateSheet ? 'Late Entries Activated':'Activate Late Entries'}</span>
              </button>
            </div>
          </section>
          <section className="gap-y-2">
             <div className="p-2 w-full md:py-3 md:px-3 grid md:grid-cols-2 md:gap-4 gap-2 border rounded-sm md:rounded-xl bg-white">
                <div className="p-2 md:py-4 md:px-6 flex-1 flex flex-col space-y-3 md:space-y-3 md:space-x-10 border rounded-md md:rounded-lg bg-white">
                  <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-sm font-semibold rounded-md bg-primary/70 text-white tracking-widest uppercase -skew-x-6">ORIENTATION INFO</h1>
                  <div className="space-y-4">
                    { data.gradeMeta?.map((row:any) => (
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-4 border-b md:border-none">
                          <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <span className="w-20 text-xs md:text-sm text-gray-500">{row.max} - {row.min}</span>
                            <span className="py-0.5 px-2 w-8 bg-primary/10 font-semibold text-center text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.grade}</span>
                            <span className="py-0.5 px-2 w-32 bg-primary-accent/10 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.remark} </span>
                            <span className="py-0.5 px-2 w-8 bg-primary/10 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.gradepoint} </span>
                          </div>
                     </div>
                    ))}
                  </div>
                </div>
                <div className="p-2 md:py-4 md:px-6 flex-1 flex flex-col space-y-3 md:space-y-3 md:space-x-10 border rounded-md md:rounded-xl bg-white">
                  <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-sm font-semibold rounded-md bg-primary/70 text-white tracking-widest uppercase -skew-x-6">REGISTRATION INFO</h1>
                  <div className="space-y-2">
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-1 border-b md:border-none">
                        <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                        <div className="flex-1 text-xs md:text-[0.82rem] text-gray-500 font-semibold">REGISTRATION OPENS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {moment(data?.registerStart)?.format("MMM DD, YY")?.toUpperCase()}</div>
                     </div>
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-1 border-b md:border-none">
                        <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                        <div className="flex-1 text-xs md:text-[0.82rem] text-gray-500 font-semibold">REGISTRATION CLOSES:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {moment(data?.registerStart)?.format("MMM DD, YY")?.toUpperCase()}</div>
                     </div>
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-1 border-b md:border-none">
                        <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                        <div className="flex-1 text-xs md:text-[0.82rem] text-gray-500 font-semibold">LATE REGISTRATION CLOSES:&nbsp;&nbsp; {moment(data?.registerStart)?.format("MMM DD, YY")?.toUpperCase()}</div>
                     </div>
                  </div>
                </div>
                <div className="p-2 md:py-4 md:px-6 flex-1 flex flex-col space-y-3 md:space-y-3 md:space-x-10 border rounded-md md:rounded-xl bg-white">
                  <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-sm font-semibold rounded-md bg-primary/70 text-white tracking-widest uppercase -skew-x-6">LECTURES INFO</h1>
                  <div className="space-y-4">
                  { data.classMeta?.map((row:any) => (
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-4 border-b md:border-none">
                          <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <span className="w-20 text-xs md:text-sm text-gray-500">{row.max} - {row.min}</span>
                            <span className="py-0.5 px-2 w-fit bg-primary-accent/10 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.class} </span>
                          </div>
                     </div>
                    ))}
                  </div>
                </div>
                <div className="p-2 md:py-4 md:px-6 flex-1 flex flex-col space-y-3 md:space-y-3 md:space-x-10 border rounded-md md:rounded-xl bg-white">
                  <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-sm font-semibold rounded-md bg-primary/70 text-white tracking-widest uppercase -skew-x-6">EXAMS INFO</h1>
                  <div className="space-y-4">
                  { data.classMeta?.map((row:any) => (
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-4 border-b md:border-none">
                          <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <span className="w-20 text-xs md:text-sm text-gray-500">{row.max} - {row.min}</span>
                            <span className="py-0.5 px-2 w-fit bg-primary-accent/10 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.class} </span>
                          </div>
                     </div>
                    ))}
                  </div>
                </div>
                <div className="p-2 md:py-4 md:px-6 flex-1 flex flex-col space-y-3 md:space-y-3 md:space-x-10 border rounded-md md:rounded-xl bg-white">
                  <h1 className="py-0.5 px-2 md:px-3 w-fit text-xs md:text-sm font-semibold rounded-md bg-primary/70 text-white tracking-widest uppercase -skew-x-6">SCORE ENTRIES INFO</h1>
                  <div className="space-y-4">
                  { data.classMeta?.map((row:any) => (
                     <div className="pb-3 md:pb-0 flex md:items-center space-x-4 border-b md:border-none">
                          <MdNumbers className="w-3 h-3 md:h-5 md:w-6 text-primary/70" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0 md:space-x-2">
                            <span className="w-20 text-xs md:text-sm text-gray-500">{row.max} - {row.min}</span>
                            <span className="py-0.5 px-2 w-fit bg-primary-accent/10 font-semibold text-[0.6rem] md:text-xs text-gray-500 rounded uppercase">{row.class} </span>
                          </div>
                     </div>
                    ))}
                  </div>
                </div>
             </div>
         </section>



        
      </div>
    </main>
  )
}

export default PgAISCalendar