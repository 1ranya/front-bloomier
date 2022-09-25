import React, { useState } from 'react'
import {BsHeart, BsHeartFill} from "react-icons/bs" 

import HeartAnimation  from './HeartAnimation';

export default function InterractionBlock() {
  const likeButtonCommonStyle = "absolute bottom-[10%] left-[5%]";
  
  const [liked, setLiked] = useState<boolean>(false)

  const hitLike = () => {
    setLiked(true)
  }
  const hitDislike = () => {
    setLiked(false)
  }

  return (
    <div className='absolute bottom-[0%] w-[100%] h-[40px] bg-secondary-color/[.54] rounded-b-2xl'>
        { liked 
            ?(<div className={likeButtonCommonStyle}>
                <HeartAnimation />
                <BsHeartFill 
                onClick={hitDislike} 
                className="animate-heartBeat" 
                size={30}
                />
            </div>)
            :(<div className={likeButtonCommonStyle}>
            <BsHeart onClick={hitLike} className='text-primary-color font-black'
                size={30}
            />
            </div>)
        }
    </div>
  )
}
