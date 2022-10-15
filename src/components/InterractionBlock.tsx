import React, { useEffect, useMemo, useState } from 'react'
import {BsHeart, BsHeartFill} from "react-icons/bs" 
import { RiHeartsFill } from "react-icons/ri";

import HeartAnimation  from './HeartAnimation';
import photoDataService from '../api/services/photo.service'
interface Props {
  photo: {
    likes:  number, 
    id: number,
  }
}

interface LocalStorageType {
  
}

export default function InterractionBlock({photo}: Props) {

  // Local Storage items
  const getLikedItemsStorage = localStorage.getItem('likedItems')
  const getIdLocalStorage = localStorage.getItem('id')
  const getIsLikedLocalStorage = localStorage.getItem('isLiked')
  const likeButtonCommonStyle = "absolute bottom-[10%] left-[5%]";
  
  // useStates
  const [liked, setLiked] = useState<boolean>(() => {
    const isLiked = getIsLikedLocalStorage;
    const initialValue= JSON.parse(isLiked?.toString() || 'false')
    return initialValue || false
  })

  const [likedItems, setLikedItems] = useState<string[]>([])
  const [likesNumber, setLikesNumber] = useState<number>(photo.likes)
  const [storageSet, setStorageSet] = useState<string[]>([])

  // Functions
  useEffect(()=> {
    
  }, [])
  const hitLike = async () => {
    const likes = likesNumber+1
    const dataToUpdate = {
      "likes": likes
    }
    setLiked(true)
    setLikesNumber(likes)
    
    // Update likes number
    await photoDataService.update(photo.id, dataToUpdate)

    // Update local storage liked items value 
    if(getLikedItemsStorage === null){
      localStorage.setItem('likedItems',`${photo.id}`)
    } else {
      let temp = getLikedItemsStorage?.concat((`,${photo.id}`).toString())
      localStorage.setItem('likedItems', temp)
    }

    const likedItemsArray = getLikedItemsStorage?.split(',')
    setLikedItems(likedItemsArray ?? [])
  }

  const hitDislike = () => {
    setLiked(false)
    setLikesNumber(likesNumber-1)
    localStorage.setItem('isLiked', 'false')
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
          font-semibold text-primary-color'>{likesNumber} <RiHeartsFill/></span>
    </div>
  )
}
