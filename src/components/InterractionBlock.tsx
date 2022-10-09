import React, { useEffect, useState } from 'react'
import {BsHeart, BsHeartFill} from "react-icons/bs" 
import { RiHeartsFill } from "react-icons/ri";

import HeartAnimation  from './HeartAnimation';

interface Props {
  photo: {
    likes:  number, 
    id: number,
  }
}

export default function InterractionBlock({photo}: Props) {

  const getLikesLocalStorage = localStorage.getItem('likes')
  const getIdLocalStorage = localStorage.getItem('id')
  const getIsLikedLocalStorage = localStorage.getItem('isLiked')
  const likeButtonCommonStyle = "absolute bottom-[10%] left-[5%]";
  
  const [liked, setLiked] = useState<boolean>(() => {
    const isLiked = getIsLikedLocalStorage;
    const initialValue= JSON.parse(isLiked?.toString() || 'false')
    return initialValue || false
  })
  const [likesNumber, setLikesNumber] = useState<number>(photo.likes)
  const [id, setId] = useState<number>(() => {
    const id = getIdLocalStorage;
    const initialValue= JSON.parse(id?.toString() || '')
    return initialValue || ''
  })

  useEffect(()=> {
    console.log('photo ', photo)
  })

  const hitLike = () => {
    setLiked(true)
    setLikesNumber(likesNumber+1)
    setId(photo.id)
  }

  const hitDislike = () => {
    setLiked(false)
    setLikesNumber(likesNumber-1)
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
          :(
          <div className={likeButtonCommonStyle}>
            <BsHeart onClick={hitLike} className='text-primary-color font-black' size={30}/>
          </div>)
        }
        <span className='absolute flex gap-[2px] bottom-[10%] right-[5%] items-center
          font-semibold text-primary-color'>{getLikesLocalStorage} <RiHeartsFill/></span>
    </div>
  )
}
