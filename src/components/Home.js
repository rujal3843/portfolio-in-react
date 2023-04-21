import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>

        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Rujal Shrestha</h1>

        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a Full Stack Developer. </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>

        <div className="flex justify-center space-x-4 relative top-20">
      <a href="https://www.facebook.com" className="text-gray-500 hover:text-blue-800" ><FaFacebook size={50}/></a>
      <a href="https://www.twitter.com" className="text-gray-500 hover:text-green-800"><FaTwitter size={50} /></a>
      <a href="https://www.instagram.com" className="text-gray-500 hover:text-pink-800"><FaInstagram size={50}/></a>
    </div>
      </div>
    </div>
  );
};
