import React from 'react'
import { MdOutlineAddTask, MdOutlineDashboard, MdPassword } from 'react-icons/md'
import { CiUser } from "react-icons/ci";
import { PiLockKey } from "react-icons/pi";
import { useUserStore } from '../../utils/authService'
import AISPNavItem from './AMSPNavItem'

type Props = {
  user: any
}

function AMSPNav({ user }: Props) {
  const lasRole = user?.roles?.find(r => r?.app_tag?.toLowerCase() == 'las')
  
  return (
    <div className="py-4 flex-1 flex flex-col space-y-1 md:space-y-3">
        <AISPNavItem title="Dashboard" url="dash" Icon={MdOutlineDashboard} />
        <AISPNavItem title="Goto application" url="apply" Icon={CiUser} />
        <AISPNavItem title="Form Preview" url="preview" Icon={MdOutlineAddTask} />
    </div>
  )
}

export default AMSPNav