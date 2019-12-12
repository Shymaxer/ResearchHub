import React from "react"
import loupe from "../../images/loupe.svg"

function HeaderSearch(props) {
    return (
        <div className="search-container">
            <input className="search" type="search" placeholder="Search.."></input>
            <a href={props.href}><img className="img-loupe" src={loupe} alt=""></img></a> 
        </div>
    )
}

export default HeaderSearch