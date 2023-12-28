import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImMail, ImMail3, ImMail4, ImPlus } from 'react-icons/im'
import { MdDashboard, MdEdit, MdEditDocument, MdLocationOn } from 'react-icons/md'
import PageTitle from '../../components/dric/PageTitle'
import { FaEdit, FaEnvelope, FaGlobe, FaLink, FaLocationArrow, FaMailBulk, FaMarker, FaPhone, FaRegEnvelope, FaTrash } from 'react-icons/fa'
import { FcPhone, FcViewDetails } from 'react-icons/fc'
import SubPageTitle from '../../components/dric/SubPageTitle'
import { Form, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import Service from '../../utils/dricService'
import toast from 'react-hot-toast'

type Props = {}

// Save Form
export async function action({ request, params }){
   const id = params?.funderId || 0;
   const formData = await request.formData()
   const data = Object.fromEntries(formData)
   let resp;
    if(id != 0) 
      resp = await Service.updateFunder(id,data);
    else
      resp = await Service.postFunder(data);
   
    if(resp){
      return redirect(`/dric/funders/${resp.id}`)
    }
} 

// Load Data of Single 
export async function loader({ params }){
   let data = { id: 0 };
   const countries = await Service.fetchCountries()
   const id = params?.funderId || 0;
   if(id != 0)
     data = await Service.fetchFunder(id)
   return { data,countries }
}

function PgDricFunderForm({}: Props) {
  
  const navigate = useNavigate()
  const { data,countries }: any = useLoaderData();
 
  return (
    <main className="md:pl-10 p-2 md:p-6 space-y-4 md:space-y-10">
      <SubPageTitle title={`${data?.id ? 'Edit':'Create'} Funder`} page="Funders" />
      <div className="p-2 md:p-6 border bg-slate-50/50 rounded-xl space-y-6">
         <section className="flex md:space-x-6">
           <div className="flex-1 flex flex-col space-y-1 md:space-y-3">
              <h1 className="text-lg md:text-2xl tracking-wide font-semibold text-blue-950/70">{data?.id ? 'Edit':'Create'} Funder</h1>
              <div className="flex items-center space-x-2 text-zinc-400 text-base">
                 <span className="text-xs md:tracking-wider">Please provide neccessary information</span>
              </div>
            </div>
         </section>

         <Form method="post" className="grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-4">
             {/* Record */}
             <div className="p-3 md:py-6 md:pb-10 md:px-6 border rounded-lg md:rounded-xl bg-white space-y-3 md:space-y-6">
               <h1 className="py-0.5 px-2 md:px-4 w-fit text-xs md:text-base font-semibold rounded-md bg-blue-950/60 text-white tracking-widest uppercase -skew-x-6">General</h1>
               <div className="md:pl-6 space-y-4">
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Funder</span>
                      <input arial-label="title" name="title" defaultValue={data?.title} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Description</span>
                      <textarea arial-label="description" name="description" defaultValue={data?.description} required className="focus:ring-0 border focus:border-slate-300 border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md"></textarea>
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Location</span>
                      <input arial-label="location" name="location" defaultValue={data?.location} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Address</span>
                      <textarea arial-label="address" name="address" defaultValue={data?.address} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md"></textarea>
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Phone Number</span>
                      <input arial-label="phone" name="phone" defaultValue={data?.phone} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Email Address</span>
                      <input arial-label="email" name="email" defaultValue={data?.email} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                </div>
             </div>

             <div className="p-3 md:py-6 md:pb-10 md:px-6 border rounded-lg md:rounded-xl bg-white space-y-3 md:space-y-66">
               <h1 className="py-0.5 px-2 md:px-4 w-fit text-xs md:text-base font-semibold rounded-md bg-blue-950/60 text-white tracking-widest uppercase -skew-x-6">SECURE PORTAL</h1>
               <div className="md:pl-6 space-y-4">
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Country</span>
                      <select arial-label="country" name="countryId" defaultValue={data?.countryId} required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md">
                        <option selected disabled>-- Choose --</option>
                        { countries && countries?.map((row:any) =>(
                          <option key={row.id} value={row.id}>{row.longName}</option>
                        ))}
                       </select>
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Website Address</span>
                      <input arial-label="publicPage" name="publicPage" defaultValue={data?.publicPage} type="url" required className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Website Logo URL</span>
                      <input arial-label="logo" name="logo" defaultValue={data?.logo} type="url" className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Portal Address</span>
                      <input arial-label="accessPage" name="accessPage" defaultValue={data?.accessPage} type="url" className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Portal Username</span>
                      <input arial-label="userName" name="userName" defaultValue={data?.userName} className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <label className="flex flex-col space-y-2">
                      <span className="text-sm md:text-base text-gray-500 font-medium">Portal Password</span>
                      <input arial-label="password" name="password" defaultValue={data?.password} className="focus:ring-0 border focus:border-slate-300  border-slate-200 bg-blue-500/5 text-sm md:text-base text-gray-500 rounded-md" />
                  </label>
                  <div className="flex items-center space-x-6">
                    <input type="hidden" name="id" defaultValue={data?.id} />
                    <button className="py-1 px-4 rounded-md bg-blue-950/70 text-white font-semibold" type="submit">SAVE</button>
                    <button onClick={() => { if(confirm('Cancel')) navigate(-1) }} className="py-1 px-4 rounded-md  bg-slate-50 border text-sm text-gray-600" type="button">CANCEL</button>
                  </div>
                  
                </div>
             </div>
             
         </Form>
        
      </div>
    </main>
  )
}

export default PgDricFunderForm