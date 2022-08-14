import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home';
import Equipes from './components/Equipes'
import Sobre from './components/Sobre';
import React, { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      
      
    
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/equipes' element={<Equipes />}/>
          <Route path='/sobre' element={<Sobre />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
