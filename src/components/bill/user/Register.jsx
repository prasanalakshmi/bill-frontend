import React from 'react'

const Register = () => {
  return (
    <div className=' w-1/2 h-1/4 bg-brown-50 size-full flex justify-center align-middle' >
      <form action="" className='bg-amber-50 size-full flex justify-center align-middle items-center flex-col w-1/2'>   
        <div>
          <h1>Registertion Form</h1>
        </div>
        <div>
        <input type="text"  placeholder='Enter Name'/>
        </div>
         <div>
        <input type="text"  placeholder='Enter UserName'/>
        </div>
         <div>
        <input type="email" placeholder='Enter Email'/>
        </div>
         <div>
        <input type="password" placeholder='Enter Password'/>
        </div>
         <div>
        <input type="password" placeholder='Re-Type Password'/>
        </div>
        <div>
          <button>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register