import React from "react"

function HeaderProfile(props) {
    return (
        <div className="header-profile">
            <img className="avatar" src={props.avatar} alt=""></img>
            <i className="icon-arrowDown"></i>
            <h5 className="value-text">{props.value}</h5>
             <i className="icon-gem"></i>
        </div>
    )
}

export default HeaderProfile