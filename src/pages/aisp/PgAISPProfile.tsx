import React, { useLayoutEffect } from 'react'
import { useLoaderData } from 'react-router'
import { useUserStore } from '../../utils/authService'
import Service from '../../utils/aisService'
import { ImProfile } from 'react-icons/im'
import { BsCalendarRange } from 'react-icons/bs'
import { FaPhoneAlt, FaRegAddressCard, FaTransgender } from 'react-icons/fa'
import { FaRegCalendar } from 'react-icons/fa6'
import { RiCommunityLine, RiHomeHeartLine } from "react-icons/ri";
import { TbHomeCheck } from 'react-icons/tb'
import { MdOutlineFiberPin, MdOutlineMarkEmailUnread } from 'react-icons/md'
import { BiMoneyWithdraw } from 'react-icons/bi'
import moment from 'moment'
import AISPBioCard from '../../components/aisp/AISPBioCard'

type Props = {}


// Load Data of Single 
export async function loader({ params }){
  const user = useUserStore.getState().user;
  const data = await Service.fetchStudent(user?.user?.tag)
  return { data }
}


function PgAISPProfile({}: Props) {
  const { data }: any = useLoaderData();
  console.log(data)

  return (
    <section className="pr-4 md:col-span-2 bg-gradient-to-r from-white via-slate-50 to-slate-100">
      <div className="md:py-2 md:col-span-2 rounded-xl space-y-4">
        {/* Banner */}
        <div className="min-h-fit py-2 px-4 bg-primary-dark/90 bg-[url('./assets/img/eagle.png')] bg-no-repeat bg-center  rounded-xl text-white ">
            <div className="w-5/6 mx-auto space-y-3">
              <h1 className="md:text-2xl font-noto">My Profile</h1>
            </div>
        </div>
        {/* Circular Messages */}
        <div className="space-y-2">
          <AISPBioCard label="Full Name" value={`${data?.title && data?.title.label+'.'} ${data?.fname} ${data?.mname && data?.mname+' '}${data?.lname}`} Icon={ImProfile} />
          <AISPBioCard label="Gender" value={data?.gender == 'M' ? 'Male':'Female'} Icon={FaTransgender} />
          <AISPBioCard label="Date of Birth" value={data?.dob && moment(data.dob).format('MMMM DD, YYYY') || 'Not Set'} Icon={FaRegCalendar} />
          <AISPBioCard label="Hometown" value={data?.hometown || 'Not Set'} Icon={TbHomeCheck} />
          <AISPBioCard label="Phone Number" value={data?.phone || 'Not Set'} Icon={FaPhoneAlt} />
          <AISPBioCard label="Email Address" value={data?.email || 'Not Set'} Icon={MdOutlineMarkEmailUnread} />
          <AISPBioCard label="Residential Address" value={data?.address || 'Not Set'} Icon={FaRegAddressCard} />
          <AISPBioCard label="Residential Country" value={data?.country?.longName || 'Not Set'} Icon={FaRegAddressCard} />
          <AISPBioCard label="Ghana Card Number" value={data?.ghcardNo || 'Not Set'} Icon={BiMoneyWithdraw} />
          <AISPBioCard label="Guardian Name & Contact" value={data?.guardianName? (data?.guardianName+' - '+data?.guardianPhone) : 'Not Set'} Icon={BiMoneyWithdraw} />
          <AISPBioCard label="Student Number" value={data?.id} Icon={MdOutlineFiberPin} />
          <AISPBioCard label="Index Number" value={data?.indexno} Icon={MdOutlineFiberPin} />
          <AISPBioCard label="Programme" value={data?.program?.longName || 'Not Set'} Icon={BsCalendarRange} />
          <AISPBioCard label="Department" value={data?.program?.department?.title || 'Not Set'} Icon={RiCommunityLine} />
          <AISPBioCard label="MLK Student Email" value={data?.instituteEmail || 'Not Set'} Icon={RiCommunityLine} />
        </div>
        {/* Documents & Latest Updates */}
      </div>
    </section>
  )
}

export default PgAISPProfile