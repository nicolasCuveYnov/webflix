// import logo from './logo.svg';
// import React, { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Movie from './components/Movie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:id" element={<Movie/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
