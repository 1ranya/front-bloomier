import React, {useEffect, useState} from 'react'
import PhotoDataService from '../api/services/photo.service'
import { Photo } from '../types'
import CardsLayout from '../components/CardsLayout'

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
    <CardsLayout content={photos} title={'Photography'}/>
  )
}
