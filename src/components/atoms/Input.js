import React from "react"



function Input(props) {
    return (
    <div className="papertitle-input">
        <h4 className="title title--sm3">{props.title}<p className="star">{props.star}</p></h4>
        <input className="input" placeholder={props.placeholder}></input>
    </div>
      
    )
}

export default Input