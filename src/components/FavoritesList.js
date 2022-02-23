import React from "react"
import Card from "./Card"
import BackButton from "./BackButton"
import {useNavigate } from "react-router-dom"
function FavoritesList({favorites}){
    const navigation = useNavigate()
    return(
        <>
        <BackButton onClick={()=>navigation('/')} text="Revenir à la liste"/>
        <div className="movie-list">
            {favorites.length>0 && favorites.map((favorites)=>
                <Card key={favorites.id} {...favorites}/>
            )}
        </div>
        </>
    )
}

export default FavoritesList