import React from 'react'
import logo from '../../medias/section_4_bg.jpg'
export default function Section4() {
  return (
    <section className="section4
      tablet:flex flex-row justify-between tablet:border-y-4 border-[#dda15e26]
    ">
      <div className='hidden 
        tablet:block w-[50%] tablet:flex flex-row text-secondary-color mx-5 items-center  
      '>
        <p className='font-title text-secondary-color text-[2.5rem]'
        style={{writingMode: "vertical-rl", textOrientation: "mixed", transform: 'scale(-1, -1)'}}
        >
        What to propose
      </p>
      <p className='font-text text-[0.9rem] font-thin text-white pl-2
        widePhone:leading-tight widePhone:text-lg laptop:text-[1.2rem]
      '>
          Through Bloomier project i aim to share my passion and mainly create link with people interested in photogarphy and art. <br/>
          My art and photography work are available in multiple platforms so : 
          <ul className="list-disc list-inside">
            <li>We can interract together</li>
            <li>You can make orders</li>
            <li>Ask for personnalized porducts</li>
            <li>Give me your feedbacks </li>
          </ul>
          <a href='/chat' className="underline">You can find all the accounts in the Let's talk section.</a>

      </p>
      </div>
      <div className='h-[40vh] 
        widePhone:h-[50vh] tablet:w-[50%] tablet:h-[60vh]
        '>
        <p className='font-title text-center text-5xl text-primary-color mt-5 absolute
          laptop:text-[4rem]
          '>Services</p>
        <img className= 'h-[inherit] object-cover' src={logo} alt="img of the section 3"  width="100%"></img>
      </div>
    </section>
  )
}
