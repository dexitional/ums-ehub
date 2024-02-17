import React from 'react'
import { FaChartBar } from 'react-icons/fa'
import { GrDashboard } from 'react-icons/gr'
import { useUserStore } from '../../utils/authService'
import AISNavItem from './AISNavItem'

type Props = {}

function AISNav({}: Props) {

  const { user } = useUserStore(state => state)
  const aisRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'hrs')
  
  return (
    <div className="py-2 px-2 flex flex-col space-y-1 md:space-y-2 h-[75vh] overflow-y-scroll scrollbar-hide">
        {['hrs techlead','hrs admin'].includes(aisRole?.role_name?.toLowerCase()) && <AISNavItem title="System Reports" url="reports" Icon={FaChartBar} /> }
        {/* <AISNavItem title="Calendar Module" url="calendar" Icon={GrDashboard} />  */}
        <AISNavItem title="Student Module" url="students" Icon={GrDashboard} /> 
        <AISNavItem title="Course Module" url="courses" Icon={GrDashboard} /> 
        {/* <AISNavItem title="Major Module" url="major" Icon={GrDashboard} />  */}
        <AISNavItem title="Program Module" url="programs" Icon={GrDashboard} /> 
        <AISNavItem title="Department Module" url="departments" Icon={GrDashboard} /> 
        <AISNavItem title="Faculty Module" url="faculties" Icon={GrDashboard} /> 
        <AISNavItem title="Curriculum Module" url="curriculums" Icon={GrDashboard} /> 
        <AISNavItem title="Scheme Module" url="schemes" Icon={GrDashboard} /> 
        <AISNavItem title="Registration Module" url="registrations" Icon={GrDashboard} /> 
        <AISNavItem title="Progression Module" url="progression" Icon={GrDashboard} /> 
        <AISNavItem title="Scoresheets Module" url="deferments" Icon={GrDashboard} /> 
        <AISNavItem title="MySheets&reg; Module" url="deferments" Icon={GrDashboard} /> 
        <AISNavItem title="Backlogs Module" url="backlogs" Icon={GrDashboard} /> 
        <AISNavItem title="Pixo System &reg;" url="pixo" Icon={GrDashboard} /> 
        
        
        <AISNavItem title="Deferment Module" url="deferments" Icon={GrDashboard} /> 
        <AISNavItem title="Transwift Module" url="transwift" Icon={GrDashboard} /> 
        <AISNavItem title="Circular Module" url="notices" Icon={GrDashboard} /> 
        <AISNavItem title="Services Module" url="services" Icon={GrDashboard} /> 
        <AISNavItem title="Resit Module" url="resits" Icon={GrDashboard} /> 
        <AISNavItem title="Graduation Module" url="graduations" Icon={GrDashboard} /> {/* Graduation Session, Graduation */}
        <AISNavItem title="Reports Module &reg;" url="reports" Icon={GrDashboard} />
        
        <AISNavItem title="Staff Module" url="staff" Icon={GrDashboard} />
        <AISNavItem title="Staff Jobs Module" url="designations" Icon={GrDashboard} />
        <AISNavItem title="Staff Roles Module" url="roles" Icon={GrDashboard} />
        <AISNavItem title=" Units Module" url="units" Icon={GrDashboard} />
        <AISNavItem title=" Utility Module" url="units" Icon={GrDashboard} /> {/* Religion,Region,Country,Disability, */}
        
    </div>
  )
}

export default AISNav