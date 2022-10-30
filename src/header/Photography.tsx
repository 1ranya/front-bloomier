import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'

import InterractionBlock from '../components/InterractionBlock'
import PhotoDataService from '../api/services/photo.service'
import {cardStyle, imageStyle} from '../styling/common-styles'
import { Photo } from '../types'
import Loader from '../components/Loader'

export default function Photography() {
  const [photos, setPhotos] = useState<Photo[]>([])
  
  useEffect(() => {
    async function fetchGalleryPhotos(){
      const res = await PhotoDataService.getAll()
      let photos = res
      photos = photos.filter((photo:Photo) => photo.category === 'photography')
      setPhotos(photos)
    }
    fetchGalleryPhotos();
  },[])

  return (
    <>
      <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Photography</p>
      { photos.length > 0  
        ?(<div className='mx-1.5 phone:flex flex-row flex-wrap widePhone:grid gap-5 wideTablet:grid-cols-4'>
          {photos.map((photo, key) => (
            <div className={cardStyle} key={key}>
              <img src={photo.url ? photo.url : 'https://picsum.photos/700/1000'} alt="photography-alt" className={imageStyle}/>  
              <InterractionBlock photo={photo}/>
            </div>
            )
          )}
        </div>)
        :(<Loader/>)
      }
      <Footer/>
    </>
  )
}
