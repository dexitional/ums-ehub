import React from 'react'
import DricNavItem from './DricNavItem'
import { FaChartBar, FaRegChartBar } from 'react-icons/fa'
import { MdAccountCircle, MdSwitchAccount } from 'react-icons/md'
import { VscAccount } from 'react-icons/vsc'
import { BsPersonCircle, BsPersonVcard } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { TbReportMoney } from 'react-icons/tb'
import { GrDashboard } from 'react-icons/gr'
import { useUserStore } from '../../utils/authService'
import { BiMoney } from 'react-icons/bi'
import { FaFileInvoiceDollar } from 'react-icons/fa6'

type Props = {}

function DricNav({}: Props) {

  const { user } = useUserStore(state => state)
  const dricRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'dric')
  
  return (
    <div className="py-4 px-6 flex-1 flex flex-col space-y-1 md:space-y-4">
        <DricNavItem title="Dashboard" url="dash" Icon={GrDashboard} />
        <DricNavItem title="Funders" url="funders" Icon={TbReportMoney} />
        <DricNavItem title="Projects" url="projects" Icon={AiOutlineFundProjectionScreen} />
        <DricNavItem title="Payments" url="payments" Icon={BiMoney} />
        <DricNavItem title="Claims" url="claims" Icon={FaFileInvoiceDollar} />
        <DricNavItem title="Investigators" url="investigators" Icon={BsPersonVcard} />
        <DricNavItem title="Personels" url="personels" Icon={BsPersonCircle} />
        {['dric techlead','dric admin'].includes(dricRole?.role_name?.toLowerCase()) && <DricNavItem title="Roles" url="roles" Icon={VscAccount} /> }
        {['dric techlead','dric admin'].includes(dricRole?.role_name?.toLowerCase()) && <DricNavItem title="Reports" url="reports" Icon={FaChartBar} /> }
    </div>
  )
}

export default DricNav