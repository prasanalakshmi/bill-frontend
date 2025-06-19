import React, { useState } from 'react';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { SiNamecheap } from "react-icons/si";
import { FaVoicemail } from "react-icons/fa";
import { PiPasswordBold } from "react-icons/pi";
import { CgPassword } from "react-icons/cg";

const Register = () => {
  let [formData,setFormData] = useState({
    userName:"",
   password:"",
   name:"",
   email:""
  }) 
  let handleChange=e=>{
    let{name,value}=e.target
    setFormData((preVal)=>({...preVal,[name]:value}))
  }
  let handleSubmit=e=>{
       e.preventDefault()
       console.log(formData);
       
  }
  return (
    <div className=' bg-[#efefef] size-full flex justify-center items-center' >
      <form action="" className='w-1/2 bg-amber-50 flex items-center justify-center flex-col gap-8 px-[80px] py-40 rounded-3xl h-[90%] shadow-2xl max-sm:w-[90%]' onSubmit={handleSubmit}>   
        <div className='w-full flex justify-center items-center font-bold text-3xl'>
          <h1>Registration Form</h1>
        </div>
        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="text" name='name' placeholder='Enter Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
         <span><MdDriveFileRenameOutline /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm' >
        <input type="text" name='userName'  placeholder='Enter UserName'   className='w-full outline-none px-4 h-10' onChange={handleChange}/>
        <span><SiNamecheap /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="email" name='email' placeholder='Enter Email'  className='w-full outline-none px-4 h-10' onChange={handleChange}/>
          <span><FaVoicemail /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="password" name='password' placeholder='Enter Password'  className='w-full outline-none px-4 h-10' onChange={handleChange}/>
       <span><PiPasswordBold /></span>
        </div>
         <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
        <input type="password" placeholder='Re-Type Password'  className='w-full outline-none px-4 h-10'/>
         <span><CgPassword /></span>
        </div>
        <div className='bg-black text-amber-50 w-full flex justify-center items-center px-3 rounded-sm'>
          <button className='w-full outline-none px-4 h-10'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register