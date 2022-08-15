import React from 'react';
import logo from '../../medias/section_2_logo_bg_mobile.png';

function Section2() {
  return (
      <section className="section2">
        <p className='font-title text-2xl text-primary-color left-5 mt-20 absolute'>Founder</p>
        <img alt="logo" src={logo} width="100%"/>
        <div className=''></div>
      </section>
  );
}

export default Section2;