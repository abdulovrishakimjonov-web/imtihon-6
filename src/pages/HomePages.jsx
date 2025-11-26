// import React, { useEffect, useState } from 'react';

import Showcese from '../components/Showcese'
import About from '../components/About';
import Funktion from '../components/Funktion';
import Axiose from '../components/Axiose';
import Count from '../components/Count';
import SectionNewProducts from './SectionNewProducts';
import HomeBestSection from './HomeBestSection';
import SectionTechnology from './SectionTechnology';

const HomePages = () => {
  
  return (
    <div>
      <Showcese/>
    <SectionTechnology/>
    <About/>
    <SectionNewProducts/>
    <Funktion/>
    <HomeBestSection/>
    <Axiose/>
    <Count/>

    </div>
  )
}

export default HomePages