import React from 'react';

import { useDispatch } from 'react-redux'
import { GiCrossedBones } from "react-icons/gi";

import { handleMenu } from '../features/menuSlice'
interface Props {
  isCross: boolean,
}

function Burger(props: Props) {
  const dispatch = useDispatch()
  const handleMenuDisplay = () => {
    console.log('test here')
    dispatch(handleMenu(true));
  } 

  return (
    <div className="burger flex flex-col gap-1" onClick={handleMenuDisplay}>
      {props.isCross ?
        <div>
          <GiCrossedBones size={25} className="text-secondary-color"/>
        </div>
        : 
        (<>
          <div className='w-7 h-1 bg-secondary-color'></div>
          <div className='w-7 h-1 bg-secondary-color'></div>
          <div className='w-7 h-1 bg-secondary-color'> </div>
        </>)
      }
    </div>
  );
}

export default Burger;