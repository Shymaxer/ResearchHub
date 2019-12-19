import React from "react"



function SMLink(props) {
    return (
      <div className="sm-link">       
        <input className="input-sm" placeholder={props.placeholder}><img src={props.icon} alt=""></img></input>
      </div>
      
    )
}

export default SMLink