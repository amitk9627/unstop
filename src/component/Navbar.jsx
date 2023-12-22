import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { PiNotePencilFill } from "react-icons/pi";
import { GrCopy } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='navbar '>
      <div className=' p-8  flex flex-col gap-10'>
        <div className='flex flex-col max-md:flex-row gap-2 items-center'>
          <span><MdOutlineDashboard className='text-xl text-center max-md:text-lg' /></span>
          <span className='text-lg text-center max-md:text-md'>Dashboard</span>
        </div>
        <div className='flex flex-col max-md:flex-row gap-2 items-center'>
          <span><PiNotePencilFill className='text-xl text-center max-md:text-lg' /></span>
          <span className='text-lg text-center max-md:text-md'>Assessment</span>
        </div>
        <div className='flex flex-col max-md:flex-row gap-2 items-center'>
          <span><GrCopy className='text-xl text-center max-md:text-lg' /></span>
          <span className='text-lg text-center max-md:text-md'>My Library</span>
        </div>

        <div class="lineHorizontal__container">
          <div class="lineHorizontal"></div>
        </div>
        <div className='flex flex-col max-md:flex-row gap-2 items-center'>

          <span><MdOutlineDashboard className='text-xl text-center max-md:text-lg' /></span>
          <span className='text-lg text-center max-md:text-md'>Round status</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
