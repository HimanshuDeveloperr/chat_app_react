import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='flex items-center bg-[#041C32] h-[50px] p-[10px] justify-between text-white'>
      <span className="font-bold">Welcome</span>
      <div className="flex gap-[10px]">
        <img src="" alt="" className='h-[24px] w-[24px] rounded-[50%] object-cover' />
        <span>Himanshu</span>
        <button className='bg-[#04293A] border-none text-white cursor-pointer font-bold text-[10px] px-2 rounded-sm'onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar