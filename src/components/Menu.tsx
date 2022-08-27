import React from 'react'

export default function Menu() {
  return (
    <div className='absolute w-viewport-95 h-header-max bg-secondary-color/75 text-primary-color flex flex-col justify-evenly items-center font-title animate-fadeIn'>
        <a href='/gallery'>Home</a>
        <p>Gallery</p>
        <p>Let's chat</p>
    </div>  
  )
}
