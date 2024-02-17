import React, { useRef } from 'react'
import { HiUserAdd } from "react-icons/hi";
import { GoPasskeyFill } from "react-icons/go";
import { FaRegIdCard } from 'react-icons/fa6';
import Service from '../../utils/aisService'
import { useUserStore } from '../../utils/authService';
import { TbPhotoCancel } from 'react-icons/tb';
import { redirect, useNavigate } from 'react-router';

type Props = {
    data?: any;
}

function AISAccountCard({ data }: Props) {
  const navigate = useNavigate()
  const fileRef:any = useRef(null)
  const user = useUserStore(state => state.user)
  const stageAccess = async () => {
    const ok = window.confirm("Setup Student Portal Access ?")
    if(ok){
      const resp = await Service.stageStudentAccess(data?.id);
    }
  }

  const resetAccess = async () => {
    const ok = window.confirm("Reset Student Portal Password ?")
    if(ok){
      const resp = await Service.resetStudentAccess(data?.id); console.log(resp)
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

  const generateCard = async () => {

  }

  return (
    <div className="w-full rounded flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
       <div className="w-full grid md:grid-cols-3 gap-2 md:gap-4">
          {/* Stage Account */}
          <button onClick={stageAccess} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
            <HiUserAdd className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
            <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Stage Student Access</span>
          </button>
          {/* Reset Account */}
          <button onClick={resetAccess} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
            <GoPasskeyFill className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
            <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Reset Student Access</span>
          </button>
           {/* Index Number */}
           <button onClick={resetAccess} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
            <GoPasskeyFill className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
            <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Generate Index Number</span>
          </button>
       
          {/* Stage Account */}
          <form action="post" encType='multipart/form-data' className="w-full">
            <button type="button" onClick={() => fileRef.current.click()} className="w-full p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
              <HiUserAdd className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
              <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Change Student Photo</span>
            </button>
            <input type="file" ref={fileRef} name="photo" onChange={changePhoto} className="hidden"/>
          </form>
          {/* Remove Photo */}
          <button onClick={removePhoto} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
            <TbPhotoCancel className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
            <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Remove Student Photo</span>
          </button>
          {/* Reset Account */}
          <button onClick={generateCard} className="p-1.5 md:py-1 md:px-1 rounded-full flex items-center space-x-4 bg-primary-accent/5 border border-primary-accent/20 shadow">
            <FaRegIdCard className="text-primary-accent/60 h-8 w-8 md:h-10 md:w-10 p-1 md:p-1.5 bg-white border-2 md:border-4 border-primary-accent/20 rounded-full" />
            <span className="font-semibold text-sm md:text-base text-primary-accent/70 font-noto">Generate ID Card</span>
          </button>
       </div>
    </div>
  )
}

export default AISAccountCard