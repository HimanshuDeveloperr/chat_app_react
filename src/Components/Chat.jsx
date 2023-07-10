import React from 'react'
import add from '../Assets/add.png'
import cam from '../Assets/cam.png'
import more from '../Assets/more.png'
import Messages from './Messages'
import Input from './Input';
const Chat = () => {
  return (
    <div className='flex-[2] relative'>
      <div className="h-[50px] bg-[#041C32] flex items-center justify-between p-[10px] text-[lightgrey]">
        <span>Himanshu</span>
      <div className="flex gap-[10px]">
        <img src={cam} alt=""  className='cursor-pointer h-[24px]'/>
        <img src={add} alt=""  className='cursor-pointer h-[24px]'/>
        <img src={more} alt="" className='cursor-pointer h-[24px]' />
      </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat