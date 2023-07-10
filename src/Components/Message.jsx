import React from 'react'

const Message = () => {
  return (
     
    <div className="flex  gap-[20px]">
      <div className="flex flex-col text-[grey] mb-[20px] font-[300]">
       <img src="" alt="" className='w-[40px] h-[40px] object-cover rounded-[50%]' />
       <span>Just Now</span>
      </div>
      <div className="max-w-[80%] flex flex-col gap-[10px]">
      <p className='p-[10px] rounded-none rounded-tr-[10px] rounded-br-[10px] max-w-max rounded-bl-[10px] bg-white'>Hello</p>
      <img src="" alt="" className='w-[50%]'/>
      </div>
    </div>

    )
}

export default Message