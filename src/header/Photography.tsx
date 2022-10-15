import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'

import InterractionBlock from '../components/InterractionBlock'
import PhotoDataService from '../api/services/photo.service'

interface Photo {
  id: number, 
  description?: string,
  publisher?: string,
  likes?: number,
  category: string,
  createdAt: Date,
}

export default function Photography() {
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    async function fetchGalleryPhotos(){
      const res = await PhotoDataService.getAll()
      let photos = res.data
      photos = photos.filter((photo:Photo) => photo.category === 'photography')
      setPhotos(photos)
    }
    fetchGalleryPhotos();
  },[])

  return (
    <>
      <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4' > Photography</p>
      <div className='mx-5 phone:flex flex-row flex-wrap widePhone:grid grid-cols-2 gap-5 wideTablet:grid-cols-4'>
        {photos.map((photo) => (
          <div className="relative">
            <img src='https://picsum.photos/700/1000' alt="photography-alt" className="rounded-2xl"/>  
            <InterractionBlock photo={photo}/>
          </div>
          )
        )}
      </div>
      <Footer/>
    </>
  )
}
