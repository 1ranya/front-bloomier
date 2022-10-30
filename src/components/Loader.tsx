import React from 'react'
import { ImSpinner2 } from "react-icons/im"

export default function Loader() {
  return (
    <div className='m-auto'>
        <ImSpinner2 className='animate-spin text-dark-primary-color' size={100}/>
    </div>
  )
}
