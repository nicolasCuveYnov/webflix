import React from "react";
import { Link } from "react-router-dom";
function FavoritesCounter(props){
    return(
        <nav className="nav">
            <span className="nav-text">{`Vous avez ${props.favorites.length} films dans vos favoris, `}</span>
            <Link className="nav-link" to="/favorites">cliquer ici pour les voir</Link>
        </nav>
    )
}

export default FavoritesCounter