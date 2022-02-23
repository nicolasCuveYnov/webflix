import React from "react"
import Card from "./Card"

function MovieList({movies}){

    return(
        <> 
        <div className="movie-list">
            {movies.length>0 && movies.map((movie)=>
                <Card key={movie.id} {...movie}/>
            )}
        </div>
        </>
    )
}

export default MovieList