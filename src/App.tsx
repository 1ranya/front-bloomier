import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './Home/index';
import Gallery from './header/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
