import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieList from "./MovieList"
import SearchBar from "./SearchBar"

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a1c10d7ef7703cb7984c6885dba90398"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=a1c10d7ef7703cb7984c6885dba90398&language=fr-FR&query="

function Home(){
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])

    const [searchParams, setSearchParams] = useSearchParams();
    const getPopularMovies = ()=>{
        fetch(API_URL)
        .then((res)=> res.json())
        .then((data)=>{
            setMovies(data.results)
            setFilteredMovies(data.results)
        })
    }
    const getMovies = (query)=>{
        fetch(SEARCH_API+query)
        .then((res)=> res.json())
        .then((data)=>{
            setMovies(data.results)
            setFilteredMovies(data.results)
        })
    }
    useEffect(()=>{
        getPopularMovies()
    },[])

    useEffect(()=>{
        if(searchParams.get("q")) {
            getMovies(searchParams.get("q"))
        }
    },[searchParams, movies])

    return(
        <> 
            <div className="header">
                <h1 className="title">Webflix</h1>
            </div>
            <SearchBar/>
            <MovieList movies={filteredMovies}/>
        </>
    )
}

export default Home
