import React from 'react';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { FaVoicemail } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CgPassword } from "react-icons/cg";

const Register = () => {
  return (
    <div className=' bg-[#efefef] size-full flex justify-center items-center' >
      <form action="" className='w-1/2 bg-amber-300 flex justify-center items-center flex-col gap-4 px-[80px] py-40 rounded-sm'>   
        <div className='bg-amber-700 w-full flex justify-center items-center'>
          <h1>Registertion Form</h1>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="text"  placeholder='Enter Name' className='w-full outline-none px-4 h-10'/>
         <span><MdDriveFileRenameOutline /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
        <input type="text"  placeholder='Enter UserName'   className='w-full outline-none px-4 h-10'/>
        <span><SiNamecheap /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="email" placeholder='Enter Email'  className='w-full outline-none px-4 h-10'/>
          <span><FaVoicemail /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="password" placeholder='Enter Password'  className='w-full outline-none px-4 h-10'/>
       <span><PiPasswordBold /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="password" placeholder='Re-Type Password'  className='w-full outline-none px-4 h-10'/>
         <span><CgPassword /></span>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <button>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register