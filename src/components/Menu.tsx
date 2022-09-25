import React from 'react'

export default function Menu() {

  const handleLinkClick = (e: any) => {
    // Change menu text color after click
    e.target.setAttribute('class', 'text-secondary-color font-bold')
  }

  const menuElements = [
    {'/': 'Home'}, 
    {'/gallery': 'Gallery'}, 
    {'/Photography': 'Photography'}, 
    {'/chat': 'Let\'s talk'}
  ]

  const menuElementsHTML: React.ReactNode = menuElements.map((element) => {
    return <a href={Object.keys(element).toString()} onClick={handleLinkClick}>{Object.values(element).toString()}</a>
  })

  return (
    <div 
      id="Menu" 
      className="absolute w-viewport-95 h-full
        text-white bg-menuBgImg bg-cover 
        flex flex-col justify-evenly items-center 
        font-title font-extrabold text-4xl 
        animate-fadeIn z-10 ">
        {menuElementsHTML}
    </div>  
  )
}
