import React from 'react'
import Footer from '../components/Footer'
import InterractionBlock from '../components/InterractionBlock'
import {cardStyle, imageStyle} from '../styling/common-styles'
import { Photo } from '../types'
import Loader from '../components/Loader'

interface Props {
    content: Photo[];
    title: string;
}

export default function CardsLayout({content, title}: Props) {
  return (
    <>
      <p className='font-title text-2xl text-secondary-color text-center mt-10 mb-4'>{title}</p>
      { content.length > 0  
        ?(<div className='mx-1.5 phone:grid gap-5 widePhone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4'>
          {content.map((photo, key) => (
            <div className={cardStyle} key={key}>
              <img src={photo.url ? photo.url : 'https://picsum.photos/700/1000'} 
                alt={`${title}-alt`} 
                className={imageStyle}/>  
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
