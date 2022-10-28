import React, { useState } from 'react'
import {BsHeart, BsHeartFill} from "react-icons/bs" 
import { RiHeartsFill } from "react-icons/ri";

import HeartAnimation  from './HeartAnimation';
import photoDataService from '../api/services/photo.service'
import { Photo } from '../types';
interface Props {
  photo: Photo
}

export default function InterractionBlock({photo}: Props) {
  const likeButtonCommonStyle = "absolute bottom-[10%] left-[5%]";

  const [likesNumber, setLikesNumber] = useState<number>(Number(photo.likes))
  const [test, setTest] = useState<number[]>(JSON.parse(localStorage.getItem('likedItems')??'[]'))

  // Functions
  const hitLike = async () => {
    const likes = Number(likesNumber+1)
    let id = photo.id
    const dataToUpdate = {
      "likes": likes
    }
    setLikesNumber(likes)

    // Update local storage liked items value 
    let items =  JSON.parse(localStorage.getItem('likedItems')??'[]')
    let temp =  [...items, id]
    localStorage.setItem('likedItems', JSON.stringify(temp))
    setTest(temp)

    // Update likes number
    await photoDataService.update(photo.id, dataToUpdate)
  }


  const hitDislike = async() => {
    const likes = Number(likesNumber-1)
    let id = photo.id
    const dataToUpdate = {
      "likes": likes
    }
    setLikesNumber(Number(likes))
    
    // Delete the id of the photo 
    const itemStorage = JSON.parse(localStorage.getItem('likedItems')??'[]')
    let index = itemStorage.indexOf(id)
    itemStorage.splice(index, 1)
    localStorage.setItem('likedItems', JSON.stringify(itemStorage))

    // Update likes number
    await photoDataService.update(id, dataToUpdate)
  }

  return (
    <div className='absolute bottom-0 w-full h-10 bg-gradient-to-t from-primary-color rounded-b-2xl  pb-20'>
        { JSON.parse(localStorage.getItem('likedItems')??'[]').indexOf(photo.id) > -1
          ?(<div className={likeButtonCommonStyle}>
              <HeartAnimation />
              <BsHeartFill 
              onClick={hitDislike} 
              className="animate-heartBeat hover:cursor-pointer" 
              size={25}
              />
          </div>)
          :(
          <div className={likeButtonCommonStyle}>
            <BsHeart onClick={hitLike} className='text-secondary-color font-black hover:cursor-pointer' size={25}/>
          </div>)
        }
        <span className='absolute flex gap-[2px] bottom-[10%] right-[5%] items-center
          font-semibold text-secondary-color'>
            {likesNumber}<RiHeartsFill className='fill-[#9b2226]'/>
        </span>
    </div>
  )
}
