import React from 'react'
import {BsHeartFill} from "react-icons/bs" 
export default function HeartAnimation() {
  return (
    <div className=''>
        <BsHeartFill className="animate-appear-2 " size={17} />
        <BsHeartFill className="animate-appear-1" size={19}/>
        <BsHeartFill className="animate-appear" size={21}/>
    </div>
  )
}
