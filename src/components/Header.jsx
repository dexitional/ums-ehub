import React from 'react'
import Logo from '../assets/img/logo_portalbr_.png'
//import { useAuth } from '../utils/authService';
import { useNavigate } from 'react-router';
import { MdLogout, MdSpaceDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useUserStore } from '../utils/authService';

function Header() {
  
  const navigate = useNavigate()
  // const { logout,user } = useAuth();
  const { logout, user } = useUserStore(state => state);
  const signout = async () => {
     const ok = window.confirm("Log Out?")
     if(ok){
       await logout();
       navigate('/login', { replace: true })
     }
  }

  return (
    <header className="w-full">
        <div className="w-full bg-blue-950">
            <div className="px-3 md:px-0 md:mx-auto w-full h-14 md:max-w-7xl flex items-center">
                <img src={Logo} alt="Logo" className="h-7 md:h-12" />
                <div className="flex-1 flex items-center justify-end space-x-2">
                    <img src={user?.photo ?? Logo} alt="" className="h-8 w-8 rounded-full object-cover bg-yellow-100/50 backdrop-blur-sm" />
                    <div className="hidden md:flex px-3 py-1 rounded-md border border-gray-200  bg-blue-50/20 bg-opacity-50 backdrop-blur-sm text-white font-semibold capitalize">{user?.user?.fname?.toLowerCase()} { user?.user?.mname && user?.user?.mname?.toLowerCase()+' '}{user?.user?.lname?.toLowerCase()}</div>
                    <div className="p-1 rounded-md border md:border flex items-center space-x-1">
                        <Link to="/dash" className={`bg-slate-200 h-6 w-6 rounded-l border flex items-center justify-center`}>
                            <MdSpaceDashboard className="h-5 w-5 text-blue-950" />
                        </Link>
                        <button onClick={signout} className={`bg-slate-50 h-6 w-6 rounded-r border flex items-center justify-center`}>
                            <MdLogout className="h-5 w-5 text-blue-950" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-2 w-full border-b-2 border-red-200/20 bg-red-100 /*bg-[url('./assets/img/adinkra.png')]*/ bg-center"></div>
    </header>
  )
}

export default Header