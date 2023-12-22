import React from 'react'
import Navbar from '../component/Navbar'
import { IoMdLink } from "react-icons/io";
import { SiRoamresearch } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { FaBarsProgress } from "react-icons/fa6";

const Assessment = () => {
  return (
    <div className='flex gap h-[100vh] w-full relative bg-[#DBE7EF]' >
      <div className='w-[150px] bg-blue-500'>
        <Navbar />
      </div>
      <div className='w-full px-4'>
        <div className="p-4 bg-white w-full h-full rounded-3xl">
          <div className='w-[100%] flex gap-10'>
            <div className='flex items-center gap-4'>
              <p className='text-2xl font-semibold text-gray-600'>Assessment</p>
            </div>
            <hr />
            <div className='flex item-center gap-6'>

              <p className='text-blue-600 border-b-4 border-b-blue-600'>My Assessments</p>
              <p className=''>Unstop Assessments</p>
            </div>
          </div>
          {/* line */}
          <div class="lineHorizontal__container">
            <div class="lineHorizontal"></div>
          </div>

          <div className='pt-4'>
            <div>
              <h1 className='text-gray-600 text-xl font-semibold p-2'>Assessment Overview</h1>
              <div className='border border-gray-300 rounded-2xl p-4'>

                <div className='flex gap-4 justify-between items-center'>
                  <div className='flex flex-col gap-4'>
                    <p className='text-md font-semibold text-gray-500'>Total Assessment</p>
                    <p className='flex gap-3 items-center'>
                      <p className='bg-purple-100 p-3 rounded'><FaBarsProgress className=' text-xl text-purple-500' /></p>
                      <span className='text-2xl font-extrabold text-gray-600'>34</span>
                    </p>
                  </div>

                  <div>
                    <p className='text-lg font-semibold text-gray-500'>Candidates</p>
                    <div className='flex gap-2'>
                      <div>
                        <p className='flex items-center gap-4'>
                          <p className='bg-purple-100 p-3 rounded'><SiRoamresearch className=' text-xl text-purple-500' /></p>
                          <p className='flex items-center gap-2'>
                            <p><span className='text-2xl font-extrabold text-gray-600'>11000</span><span className='text-md text-green-400'>+89</span></p>
                          </p>
                          <hr />
                          <p>
                            <p><span className='text-2xl font-extrabold text-gray-600'>11000</span><span className='text-md text-green-400'>+89</span></p>
                          </p>
                        
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className='text-lg font-semibold text-gray-500'>Candidates Source</p>
                    <div className='flex gap-2'>
                      <div>
                        <p className='flex items-center gap-4'>
                          <p className='bg-purple-100 p-3 rounded'><SiRoamresearch className=' text-xl text-purple-500' /></p>
                          <p className='flex items-center gap-2'>
                            <p><span className='text-2xl font-extrabold text-gray-600'>11000</span><span className='text-md text-green-400'>+89</span></p>
                          </p>
                          <hr />
                          <p>
                            <p><span className='text-2xl font-extrabold text-gray-600'>11000</span><span className='text-md text-green-400'>+89</span></p>
                          </p>
                          <hr />
                          <p>
                            <p><span className='text-2xl font-extrabold text-gray-600'>11000</span><span className='text-md text-green-400'>+89</span></p>
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <p className='text-lg font-semibold text-gray-500'>Total Purpose</p>
                    <p className='flex gap-3 items-center'>
                      <p className='bg-purple-100 p-3 rounded'><IoMdLink className=' text-xl text-purple-500' /></p>
                      <span className='text-2xl font-extrabold text-gray-600'>11</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

    </div>
  )
}

export default Assessment
