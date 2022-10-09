import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { RiHandHeartFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className='h-[50px] w-[100%] text-[#f0ffff]'>
        <div className='h-[50px] w-[100%] text-[#f0ffff] flex flex-row items-center justify-center text-sm font-thin gap-2 relative max-w-[100%] m-auto phone:text-[10px] widePhone:text-sm'>
            <FaRegCopyright/> Bloomier Created with <RiHandHeartFill/> by TOUNSI Rania 2022
        </div>
    </div>
  )
}
