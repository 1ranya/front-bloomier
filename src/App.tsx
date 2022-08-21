import React from 'react';

import './App.css';
import Section1 from '../src/Home/section1/Section1'
import Section2 from '../src/Home/section2/Section2'
import Section3 from './Home/section3/Section3';
import Section4 from './Home/section4/Section4';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default App;
