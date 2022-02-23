import React from "react"
import {Link} from "react-router-dom"
const IMG_API_URL="https://image.tmdb.org/t/p/w1280"

function TinyCard(props){
    var {id, title, poster_path} = props
    return(
        <div className="tiny-card">
            <Link to={"/movies/"+ id}>
                <img src ={IMG_API_URL + poster_path} alt={title}/>
            </Link>
        </div>
    )
}

export default TinyCard