import { Menu } from '@headlessui/react';
import React from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { FaChartBar } from 'react-icons/fa';
import { GrDashboard } from 'react-icons/gr';
import AISNavItem from './AISNavItem';
type Props = {
  user: any;
}

function AISRoleNav({ user }: Props) {
  const aisRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'ais')
  
  return (
    <Menu as='div' className="relative">
        <div className="px-4 p-2 md:hidden flex items-center justify-between border-b-2 border-slate-200/50 bg-slate-100 text-gray-400">
         
          <div className="flex items-center">
             <span className="px-3 p-1 text-sm tracking-widest font-bold text-primary/60 bg-white border-2 border-primary/60 rounded-md"><span className="text-primary/80">ACADEMICS</span>&reg;</span>
          </div>
          <Menu.Button className="p-0.5 bg-white border shadow-sm rounded-md">
            <CgMenuGridO className="h-7 w-7 text-gray-500/70"/>
          </Menu.Button>
        </div>
        {/* Mobile Navigation Slide */}
        <Menu.Items className="z-20 absolute top-13 left-0 min-h-max w-full border-b-4 border-blue-100/90 bg-blue-100 backdrop-blur-sm backdrop-opacity-70 bg-opacity-70">
          <div className="py-4 px-6 flex-1 flex flex-col space-y-1 md:space-y-4">
           {['ums techlead','ums admin'].includes(aisRole?.role_name?.toLowerCase()) && <Menu.Item as={AISNavItem} title="Reports" url="System Reports" Icon={FaChartBar}></Menu.Item>}
            <Menu.Item as={AISNavItem} title="Student Module" url="students" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Course Module" url="courses" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Program Module" url="programs" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Department Module" url="departments" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Scheme Module" url="schemes" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Registration Module" url="registrations" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Progression Module" url="progression" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Scoresheets Module" url="sheets" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="MySheets&reg; Module" url="mysheets" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Backlogs Module" url="backlogs" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Deferment Module" url="deferments" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Staff Module" url="staff" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Jobs Module" url="jobs" Icon={GrDashboard}></Menu.Item>
            <Menu.Item as={AISNavItem} title="Units Module" url="units" Icon={GrDashboard}></Menu.Item>
          </div>
        </Menu.Items>
    </Menu>
  )
}

export default AISRoleNav