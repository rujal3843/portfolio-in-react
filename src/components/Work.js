import React from 'react'
import Prj1 from '../assets/projects/workImg.jpeg'
import Prj2 from '../assets/projects/realestate.jpg'

export const Work = () => {
  return (
    <div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Works</p>
              <p className='py-4'>checkout my recent work</p>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div>
            <img src={Prj1} alt="" />
          </div>
          <div>
            <img src={Prj2} alt="" />
          </div>

          </div>

        </div>

    </div>
  )
}
