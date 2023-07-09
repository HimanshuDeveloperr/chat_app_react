import React from 'react'

const Search = () => {
  return (
    <div className='border-b-[1px] border-[#EEEEEE]'>
      <div className="p-[10px]">
        <input type="text" className='bg-transparent outline-none text-white placeholder:text-[lightgrey]' placeholder='find a user'/>
      </div>
      <div className="p-[10px] flex items-center gap-[10px] text-white cursor-pointer hover:bg-[#041C32]">
        <img src="" alt="" className='w-[50px] h-[50px] rounded-[50%] object-cover'/>
        <div className="">
          <span className='font-[500] text-[18px]'>Himanshu</span>
        </div>
      </div>
    </div>
  )
}

export default Search