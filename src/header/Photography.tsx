import React from 'react'
import Footer from '../components/Footer'

import InterractionBlock from '../components/InterractionBlock'

export default function Photography() {
  
  return (
    <>
      <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Photography</p>
      <div className='flex flex-row flex-wrap gap-y-5 mx-5'>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className="relative">
            <img src='https://picsum.photos/700/1000' alt="photography-alt" className="rounded-2xl"/>  
            <InterractionBlock />
          </div>
          )
        )}
        <Footer/>
      </div>
    </>
  )
}
