import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './Home/index';
import Gallery from './header/Gallery';
import Photography from './header/Photography';
import Chat from './header/Chat';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
