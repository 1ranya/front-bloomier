import React from 'react'

export default function Section3() {
  return (
    <section className='flex text-secondary-color gap-2 m-10 justify-center items-center
      tablet:hidden
      laptop:mx-[300px] laptop:top-[150%]
      desktop:mx-[380px] desktop:top-[180%]
    '>
        <p className='font-title text-center text-2xl '
            style={{writingMode: "vertical-rl", textOrientation: "mixed", transform: 'scale(-1, -1)'}}
            >
                Meet Rania
        </p>
        <p className='
          font-text text-[0.9rem] font-thin text-white 
          widePhone:leading-tight widePhone:text-lg'
        >
            Computer engineer, painter and photographer.
            Passioned by portrait and food photography, based in Paris.
            I love meeting people, creating beautiful photo sets, 
            mix colors and create smiles on people's face.  
            I started my business in 2022. 
        </p>
    </section>
  )
}
