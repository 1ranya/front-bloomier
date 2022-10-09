import React from 'react'
import Footer from '../components/Footer'

import InterractionBlock from '../components/InterractionBlock'

export default function Photography() {
  
  return (
    <>
      <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Photography</p>
      {/* <div className='mx-5 phone:flex flex-row flex-wrap widePhone:grid grid-cols-2 gap-5 wideTablet:grid-cols-4'>
        {photos.map((photo) => (
          <div className="relative">
            <img src='https://picsum.photos/700/1000' alt="photography-alt" className="rounded-2xl"/>  
            <InterractionBlock photo={photo}/>
          </div>
          )
        )}
      </div> */}
      <Footer/>
    </>
  )
}
