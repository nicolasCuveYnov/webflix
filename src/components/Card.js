import React from "react"
import {Link} from "react-router-dom"
const IMG_API_URL="https://image.tmdb.org/t/p/w1280"

function Card(props){
    var {id, title, poster_path} = props
    return(
        <div className="card">
            <Link to={"/movies/"+ id}>
                <img src ={IMG_API_URL + poster_path} alt={title}/>
                <div>
                    <h3>{title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Card