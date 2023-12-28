import React, { useEffect } from 'react'
// @ts-ignore
import Logo from '../assets/img/logo_portalbr_.png'
import { MdBallot, MdContactSupport, MdGroup, MdGroups2, MdMeetingRoom, MdOutlineSupportAgent, MdPermIdentity } from 'react-icons/md'
import { GiArtificialIntelligence, GiChart, GiHamburger, GiHamburgerMenu, GiHouseKeys, GiLetterBomb, GiLockSpy, GiLockedDoor, GiRamProfile, GiVote } from 'react-icons/gi'
import AppCard from '../components/AppCard'
import { ImProfile } from 'react-icons/im'
import { FcCustomerSupport, FcOnlineSupport } from 'react-icons/fc'
import { FaChartArea, FaFileContract, FaShopify } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ServiceCard from '../components/ServiceCard'
import { IoStatsChart } from 'react-icons/io5'
import { LiaVoteYeaSolid } from "react-icons/lia";
// import { useAuth } from '../utils/authService'
import { useNavigate } from 'react-router'
import { useUserStore } from '../utils/authService'
import { FaUsersBetweenLines, FaUsersViewfinder } from 'react-icons/fa6'

function Home() {
  
  // const { user } = useAuth();
  const { user } = useUserStore(state => state)
  
  return (
    <div className="w-full h-screen flex flex-col justify-between">
        <Header />
        <main className="w-full flex-1 flex flex-col overflow-y-scroll">
          <section className="mx-auto py-6 w-full max-w-6xl space-y-2">
             <h1 className="px-6 md:px-0 text-zinc-500 font-medium md:font-semibold md:text-xl">Browse By Services</h1>
             <div className="p-3 md:p-0 w-full bg-blue-50/50 md:bg-transparent grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-4">
                { user?.user?.group_id == 1 && <ServiceCard title="Voting | Best UCC Lecturer" Icon={LiaVoteYeaSolid} link="/las/dash" /> }
                { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'evs') && <ServiceCard title="General Elections Portal" Icon={GiVote} link="" /> }
                { [3].includes(user?.user?.group_id) && <ServiceCard title="National Service Portal" Icon={FaUsersViewfinder} link="/nss/dash" /> }
                {/* <ServiceCard title="Office keys reports & logs" Icon={GiHouseKeys} link="" />
                <ServiceCard title="Data Statistics Request" Icon={IoStatsChart} link="" />
                <ServiceCard title="Staff Attendance Report" Icon={FaChartArea} link="" /> */}
                <ServiceCard title="Support tickets & Request" Icon={MdOutlineSupportAgent} link="" />
                {/* <ServiceCard title="Setup SSO on Account" Icon={GiLockedDoor} link="" />
                <ServiceCard title="Community Marketplace" Icon={FaShopify} link="" />
                <ServiceCard title="UCC Alumni Network" Icon={MdGroups2} link="" /> */}
             </div>
          </section>
          <section className="mx-auto py-6 w-full max-w-6xl space-y-4">
             <h1 className="px-6 md:px-0 text-zinc-500 font-medium md:font-semibold md:text-xl">Browse By Apps</h1>
             <div className="p-3 md:p-6 w-full bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                 
                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'evs') &&
                  <AppCard 
                      title="Electa Voting System"
                      desc="Elect leaders, decide on issues by voting and referendum." 
                      Icon={GiVote} 
                      links={[
                        { title:'General Elections Portal', url:'#'},
                        // { title:'New Setup', url:'#'},
                      ]} 
                  />
                  }

                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'las') &&
                  <AppCard 
                      title="BexLecturer System"
                      desc="Elect Best University Lecturer & Staff for the year by shortlisting and voting." 
                      Icon={LiaVoteYeaSolid} 
                      links={[
                        { title:'Voting | Best UCC Lecturer', url:'/las/dash'},
                        // { title:'Goto Application', url:'/las/dash'},
                      ]} 
                  />
                  }

                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'hrs') &&
                  <AppCard 
                      title="HRMS Admin System"
                      desc="Manage staff records, leave, promotions & reports." 
                      Icon={ImProfile} 
                      links={[
                        { title:'Goto application', url:'/hrs/nss'},
                      ]} 
                  />
                  }

                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'desk') &&
                  <AppCard 
                      title="Helpdesk & Support System"
                      desc="Advanced support system for staff, students & public." 
                      Icon={MdOutlineSupportAgent} 
                      links={[
                        { title:'View admin console', url:'#'},
                      ]} 
                  />
                  }

                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'clock') &&
                  <AppCard 
                      title="Staff Attendance system"
                      desc="Staff daily attendance, clocking and duty logs." 
                      Icon={MdMeetingRoom} 
                      links={[
                        { title:'Goto application', url:'#'},
                      ]} 
                  />
                  }
                  
                  { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'key') &&
                  <AppCard 
                      title="Keys Management system"
                      desc="Manage office key profiles, their requests and submissions." 
                      Icon={GiHouseKeys} 
                      links={[
                        { title:'Goto application', url:'#'},
                      ]} 
                  />
                  }

                  {/* 
                  <AppCard 
                      title="UCC AI"
                      desc="Intelligent personal assistant for staff and students." 
                      Icon={GiArtificialIntelligence} 
                      links={[
                        { title:'Meet Nii !!', url:'#'},
                      ]} 
                  />

                   */}

                 { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'sso') &&
                 <AppCard 
                    title="Single-Sign-On System"
                    desc="Manage user accounts and application access controls." 
                    Icon={GiLockedDoor} 
                    links={[
                      { title:'Goto Application', url:''},
                    ]} 
                 />
                 }

                
                 { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'vet') &&
                 <AppCard 
                    title="SRC Nomination & Vetting System"
                    desc="Manage election nomination filings and vetting processes." 
                    Icon={FaFileContract} 
                    links={[
                      { title:'View admin console', url:'#'},
                    ]} 
                 />
                 }


                 { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric') &&
                 <AppCard 
                    title="DRIC Project+ &reg;"
                    desc="Manage DRIC Projects and business processes and concerns." 
                    Icon={FaFileContract} 
                    links={[
                      { title:'Goto Application', url:'/dric/dash'},
                    ]} 
                 />
                 }

                { user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'leta') &&
                 <AppCard 
                    title="LetaCabin &reg;"
                    desc="Manage organisation's letters and files efficiently." 
                    Icon={GiLetterBomb} 
                    links={[
                      { title:'Goto Application', url:'/dric/dash'},
                      { title:'New Setup', url:'#'},
                    ]} 
                 />
                 }

                
                 
                

             </div>
          </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home