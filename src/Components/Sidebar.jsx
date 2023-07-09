import React from 'react'
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

const Sidebar = () => {
  return (
    <div className='flex-[1] border-r-[1px] border-r-[#E3FDFD] bg-[#04293A]'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar