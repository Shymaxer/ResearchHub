import React from "react"



function SMLink(props) {
    return (
      <div className="sm-link">       
        <input className="input-sm" placeholder={props.placeholder}></input>
        <img className="sm-icon" src={props.icon} alt=""></img>
      </div>
      
    )
}

export default SMLink