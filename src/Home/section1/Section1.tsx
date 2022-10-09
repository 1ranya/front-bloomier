import React from 'react';
import logo_mobile from '../../medias/section_1_logo_bg_mobile.png';
import logo from '../../medias/section_1_logo_bg.png';
import logoV2 from '../../medias/section_1_bg_v3.png';

function Section1() {
  return (
      <section className="section1">
        <img className='laptop:hidden' alt="logo" src={logo_mobile} width="100%"/>
        <img className='phone:hidden laptop:block h-[94vh] animate-in' alt="logo" src={logo} width="100%"/>
        <img className='phone:hidden laptop:block h-[94vh] animate-out absolute top-[52px]' alt="logo" src={logoV2} width="100%"/>
      </section>
  );
}

export default Section1;