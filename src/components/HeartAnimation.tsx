import React from 'react'
import {BsHeartFill} from "react-icons/bs" 
export default function HeartAnimation() {
  return (
    <div className=''>
        {/* <BsHeartFill className="absolute bottom-[280px] left-[150px] animate-appear-2 " size={15} /> */}
        <BsHeartFill className="animate-appear-2 " size={15} />
        <BsHeartFill className="animate-appear-1" size={17}/>
        <BsHeartFill className="animate-appear" size={19}/>
    </div>
  )
}
