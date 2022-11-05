import React, { useEffect, useState } from 'react'
import PhotoDataService from '../api/services/photo.service'
import { Photo } from '../types'
import CardsLayout from '../components/CardsLayout'

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
    <CardsLayout content={galleryPhotos} title={'Gallery'}/>
  )
}
