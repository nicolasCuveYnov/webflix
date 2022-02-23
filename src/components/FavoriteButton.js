import React from "react";

function FavoriteButton(props){
    return(
        <button onClick={props.addToFavorite(props.movie.id,props.movie.title,props.movie.poster_path)} className="fav-btn">{props.text}</button>
    )
}

export default FavoriteButton