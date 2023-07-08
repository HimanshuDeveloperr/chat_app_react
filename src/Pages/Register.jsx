import React from 'react';
import add from '../Assets/addAvatar.png'
const Register = () => {
  return (
    <div className='bg-[#A0C49D] h-[100vh] flex items-center justify-center'>
      <div className="bg-white py-[20px] px-[60px] rounded-lg flex flex-col gap-[10px] items-center">
        <span className="text-[#A0C49D] font-bold text-2xl">Chat Made Easy</span>
        <span className="text-[#A0C49D]">Register</span>
        <form action="" className="flex flex-col gap-[15px]">
          <input type="text" placeholder='Name' className='p-[15px]  border-b-[#A0C49D] border-b-[1px]'/>
          <input type="email" placeholder='mail' className='p-[15px]  border-b-[#A0C49D] border-b-[1px]' />
          <input type="password" placeholder='password' className='p-[15px]  border-b-[#A0C49D] border-b-[1px]'/>
          <input type="file" id='file' className='p-[15px]  border-b-[#A0C49D] border-b-[1px] hidden'/>
          <label htmlFor="file" className='flex text-[#A0C49D] text-sm gap-[10px] items-center cursor-pointer'>
            <img src={add} alt="" width={32} />
            <span>Add an Avavtar</span>
          </label>
          <button className='bg-[#A0C49D] border-none cursor-pointer font-bold text-white p-2'>Sign Up</button>
        </form>
        <p className="text-[#A0C49D] mt-1 text-sm">You have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
