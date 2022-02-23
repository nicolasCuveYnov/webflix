import React from "react"
import {Link} from "react-router-dom"
const IMG_API_URL="https://image.tmdb.org/t/p/w1280"

function Card(props){
    // var {id, title, poster_path} = props
    return(
        <div className="card">
            <Link to={"/movies/"+ props.id}>
                <img src ={IMG_API_URL + props.poster_path} alt={props.title}/>
                <div>
                    <h3>{props.title}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Card