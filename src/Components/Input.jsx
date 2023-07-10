import React from 'react'
import Img from '../Assets/img.png'
import Attach from '../Assets/attach.png'
const Input = () => {
  return (
    <div className='h-[50px] flex items-center justify-between bg-white p-[10px] absolute w-full bottom-0'>
      <input type="text" placeholder='Type something' className='w-full border-none outline-none text-[#9fd3c7] text-[18px] placeholder-gray-500 '/>
      <div className="flex items-center gap-[10px]">
        <img src={Attach} alt=""className='h-[24px] cursor-pointer' />
        <input type="file" className='hidden' id='file' />
        <label htmlFor="file">
          <img src={Img} alt="" className='h-[24px] w-[32px] cursor-pointer'/>
        </label>
        <button className='border-none p-[2px] text-white bg-[#9fd3c7]'>Send</button>
      </div>
    </div>
  )
}

export default Input