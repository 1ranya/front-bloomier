import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'

import InterractionBlock from '../components/InterractionBlock'
import PhotoDataService from '../api/services/photo.service'
import {cardStyle, imageStyle} from '../styling/common-styles'
import { Photo } from '../types'

export default function Gallery(){
  const [galleryPhotos, setGalleryPhotos] = useState<Photo[]>([])
  useEffect(() => {
    async function fetchGalleryPhotos(){
      const res = await PhotoDataService.getAll()
      let photos = res
      photos = photos.filter((photo:Photo) => photo.category === 'gallery')
      setGalleryPhotos(photos)
    }
    fetchGalleryPhotos();
  },[])

  return (
    <>
    <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Gallery</p>
      <div className='mx-5 phone:flex flex-row flex-wrap widePhone:grid grid-cols-2 gap-5 wideTablet:grid-cols-4'>
        {galleryPhotos.map((photo, key) => (
          <div className={cardStyle} key={key}>
            <img src={photo.url ? photo.url : 'https://picsum.photos/700/1000'} alt="test" className={imageStyle} />
            <InterractionBlock photo={photo}/>
          </div>)
        )}
      </div>
      <Footer/>
    </>
  )
}
