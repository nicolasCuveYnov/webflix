import React from "react" 
import { useSearchParams } from "react-router-dom"
// import { useState } from "react"

function SearchBar() {

    const [searchParams, setSearchParams] = useSearchParams();

    return(
        <input className="search" type="text" placeholder="search.." onChange={(event) => setSearchParams({q: event.target.value})}/>
    )
}

export default SearchBar