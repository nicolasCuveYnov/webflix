// import logo from './logo.svg';
// import React, { useEffect, useState } from 'react';
import React , {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Movie from './components/Movie';
import FavoritesCounter from './components/FavoritesCounter'
import FavoritesList from './components/FavoritesList';

function App() {
  const [favorites, setFavorites] = useState([])

  const addToFavorite = (id,title,poster_path) => (event) => {
    event.preventDefault();
    console.log(id)
    if (!favorites.includes(id)) {
      setFavorites([...favorites, {id,title,poster_path}]);
      console.log(setFavorites)
    }
  };

  return (
    <BrowserRouter>
      <FavoritesCounter favorites={favorites}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:id" element={<Movie addToFavorite={addToFavorite} favorites={favorites}/>}/>
        <Route path="/favorites" element={<FavoritesList favorites={favorites}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
