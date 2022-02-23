import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import TinyCard from "./TinyCard"
const API_ONE_MOVIE = "https://api.themoviedb.org/3/movie/"
const API_KEY = "/similar?api_key=a1c10d7ef7703cb7984c6885dba90398&language=fr-FR"

function HorizontalList(props) {
    const {id} = useParams()
    const [similarMovie, setSimilarMovie] = useState([])
    useEffect(()=>{
        fetch(API_ONE_MOVIE + id + API_KEY)
            .then((res)=> res.json())
            .then((data)=>{                
                setSimilarMovie(data.results)
            })
    },[id])
    return (
        <div className="horizontal-list">
            <h3>{props.title}</h3>
            <div className="similar-movie-list">
            {similarMovie.length>0 && similarMovie.map((similarMovie)=>
                <TinyCard key={similarMovie.id} {...similarMovie}/>
            )}
        </div>
        </div>
    );
}


export default HorizontalList;