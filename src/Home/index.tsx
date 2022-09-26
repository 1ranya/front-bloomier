import React from 'react'
import Footer from '../components/Footer';
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3';
import Section4 from './section4/Section4';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
    </div>
  )
}
