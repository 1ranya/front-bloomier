import React from 'react'
import { useSelector } from 'react-redux'
import Burger from './Burger'
import Menu from './Menu';
import { SiInstagram, SiShutterstock } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { RootState } from '../redux/store';

export default function Header() {
  const isOpened = useSelector((state: RootState) => state.menu.menuState)
  const styleBorder = 'hover:rotate-45 rounded-full border-2 p-2 border-secondary-color'
  return (
    <>
      { isOpened 
        ? <div className='flex flex-row flex-nowrap gap-2 justify-between m-2'>
            <Burger isCross/>
            <Menu/>
            <div className='flex flex-row flex-nowrap gap-1 text-secondary-color'>
              <a href='#' className={styleBorder} 
                target="_blank"
                rel="no_instagram noreferrer"><SiInstagram/> </a>
              <a href="https://www.shutterstock.com/g/Rania%20tn?rid=344677805&utm_medium=email&utm_source=ctrbreferral-t-link"
                className={styleBorder} 
                target="_blank"
                rel="no_shutterstock noreferrer"><SiShutterstock/></a>
              <a href='https://www.pinterest.fr/bloomierphotography/' 
                className={styleBorder}
                rel="no_pinterest noreferrer"
                target="_blank"><FaPinterestP/></a>
              <a href='https://www.youtube.com/channel/UCmN0ZmfjV6We6nRrGgSfXhg' 
                className={styleBorder}
                rel="no_youtube noreferrer"
                target="_blank"><FiYoutube/></a>
            </div>
          </div>
        : <div className='flex flex-row flex-nowrap justify-between m-2'>
            <Burger isCross={false}/>
            <div className='flex flex-row flex-nowrap gap-1 text-secondary-color'>
              <a href='#' className={styleBorder} ><SiInstagram/> </a>
              <a href="https://www.shutterstock.com/g/Rania%20tn?rid=344677805&utm_medium=email&utm_source=ctrbreferral-t-link"
                className={styleBorder} 
                target="_blank"
                rel="no_link noreferrer"><SiShutterstock/></a>
              <a href='https://www.pinterest.fr/bloomierphotography/' 
                className={styleBorder}
                rel="no_shutterstock noreferrer"
                target="_blank"><FaPinterestP/></a>
              <a href='https://www.youtube.com/channel/UCmN0ZmfjV6We6nRrGgSfXhg' 
                className={styleBorder}
                rel="no_youtube noreferrer"
                target="_blank"><FiYoutube /></a>
            </div>
          </div>
      }
    </>
  )
}
