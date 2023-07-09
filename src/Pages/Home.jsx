import React from 'react'
import Sidebar from './../Components/Sidebar';
import Chat from './../Components/Chat';

const Home = () => {
  return (
      <div className="bg-[#A0C49D] h-[100vh] flex items-center justify-center shadow-md">
        <div className="border-[1px] border-[white] rounded-lg w-[65%] h-[80%] flex overflow-hidden">
          <Sidebar/>
          <Chat/>
        </div>
      </div>
    )
}

export default Home