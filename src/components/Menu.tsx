import React from 'react'

import { BsHouseDoor } from "react-icons/bs";

export default function Menu() {

  const menuElements = [
    {'/': 'Home'}, 
    {'/gallery': 'Gallery'}, 
    {'/photography': 'Photography'}, 
    {'/chat': 'Let\'s talk'}
  ]

  const menuElementsHTML: React.ReactNode = menuElements.map((element) => {
    return <a href={Object.keys(element).toString()} className='pb-[20px] hover:text-secondary-color flex gap-[5px] items-center' >{
        Object.values(element).toString() === 'Home' ? <BsHouseDoor size={20}/> : Object.values(element).toString()}
      </a>
  })

  return (
    <div>
      <div 
        id="Menu" 
        className="absolute w-[100%] h-full left-0 top-0
          text-faded-white
          flex flex-col justify-center items-center
          font-title font-extrabold text-xl 
          animate-fadeIn z-10
          tablet:w-[30%] bg-[#182333] tablet:items-left tablet:px-[20px] tablet:text-xl tablet:items-start tablet:justify-center
          wideTablet:w-[25%] laptop:w-[20%] desktop:w-[15%]
        ">  
          {menuElementsHTML}
      </div>  
    </div>
  )
}
