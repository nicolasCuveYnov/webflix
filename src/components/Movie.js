
import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import BackButton from "./BackButton"
import Rating from "./Rating"
import HorizontalList from "./HorizontalList"

function Movie(props){
    const API_ONE_MOVIE = "https://api.themoviedb.org/3/movie/"
    const API_KEY = "?external_source=imdb_id&language=fr-FR&api_key=a1c10d7ef7703cb7984c6885dba90398"

    const {id} = useParams()
    const navigation = useNavigate()

    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        fetch(API_ONE_MOVIE + id + API_KEY)
            .then((res)=> res.json())
            .then((data)=>{
                // console.log(data)
                setMovie(data)
            })
    },[id])

    return(
        <div className="movie">
             {
                movie ?
                    <div className="movie-content">
                        <div className="movie-action">
                            <BackButton onClick={()=>navigation('/')} text="Revenir à la liste"/>
                        </div>
                        <div className="movie-header">
                            <div className="movie-header-poster">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
                            </div>
                            <div className="movie-header-right">
                                <h1>{movie.title ? movie.title : movie.original_title}</h1>
                                <p>réalisé par XXX</p>
                                <p>sorti le {movie.release_date}</p>
                                <p>{movie.runtime} minutes</p>
                                <div>{movie.genres.length > 0 && movie.genres.map( genre => {
                                    return (<span key={genre.id} className="tag">{genre.name}</span>)
                                })}</div>
                            </div>
                        </div>
                        <div className="movie-description">
                            <h3>Overview</h3>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="movie-rating">
                            <Rating score={movie.vote_average}/>
                        </div>
                        <div className="movie-others">
                            <HorizontalList title="Contenu similaire" items={movie.genres}/>
                        </div>
                    </div>
                : 
                    <p>Loading...</p>
            }
        </div>
    )
}

export default Movie