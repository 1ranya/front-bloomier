import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import Footer from '../components/Footer';

export default function Chat() {
  return (
    <div className='flex flex-col justify-between h-[100%] min-h-[93vh]'>
        <div>
            <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Let's talk</p>
            <div className='ml-[1rem] mr-[1rem] mb-[1rem]'>
                <p className='font-text text-l text-secondary-color text-center' > 
                    My art work is destinated to you guys! <br/>
                    All your suggestions and requests are welcomed. <br/>
                </p>
            </div>
            <div className='border-secondary-color border-2 rounded-md ml-5 mr-5 p-[2rem] text-[#F0FFFF]'>
                <div className='flex flex-row gap-2'>
                <span><MdOutlineMarkEmailUnread size={25} /></span> 
                    <a href= 'mailto:bloomier.photography@gmail.com'><div>bloomier.photography@gmail.com</div></a>
                </div>
                <a href='/' className='flex flex-row gap-2'><span><SiInstagram size={25}/></span> @bloomier</a>
            </div>
        </div>
        <Footer/>
      </div>
  )
}
