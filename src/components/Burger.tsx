import React from 'react';

import { useDispatch } from 'react-redux'
import { ImCross } from "react-icons/im";
import { handleMenu } from '../features/menuSlice'
interface Props {
  isCross: boolean,
}

function Burger(props: Props) {
  const dispatch = useDispatch()
  const handleMenuDisplay = () => {
    dispatch(handleMenu(true));
  } 

  return (
    <div className="burger flex flex-col gap-1" onClick={handleMenuDisplay}>
      {props.isCross ?
        <div className="text-secondary-color z-20 mt-2 ml-2 hover:animate-wiggle">
          <ImCross size={15} className="text-faded-white"/>
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