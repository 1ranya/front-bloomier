import React from 'react'
import Burger from './Burger'
import Menu from './Menu';
import { SiInstagram, SiShutterstock } from "react-icons/si";
import { FaPinterestP } from "react-icons/fa";

export default function Header() {
  return (
    <>
        <div className='flex flex-row flex-nowrap justify-between m-2'>
            <Burger/>
            <div className='flex flex-row flex-nowrap gap-1 text-secondary-color'>
                <a href='#'><SiInstagram/> </a>
                <a href="https://www.shutterstock.com/g/bloomier"><SiShutterstock/></a>
                <FaPinterestP/>
            </div>
        </div>
        <Menu/>
    </>
  )
}
