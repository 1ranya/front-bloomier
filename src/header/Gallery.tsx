import React from 'react'

import InterractionBlock from '../components/InterractionBlock'

export default function Gallery() {
  
  return (
    <>
    <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Gallery</p>
      {/* <div className='grid grid-cols-2 gap-4 grid-cols-2 my-6 mx-2'> */}
      <div className='flex flex-row flex-wrap gap-y-5 mx-5'>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <div className='relative'>
            <img src='https://picsum.photos/700/1000' alt="test" className='rounded-2xl'/>
            <InterractionBlock />
          </div>)
        )}
      </div>
    </>
  )
}
