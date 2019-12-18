import React from "react"



function RadioButton(props) {
    return (
        <li className="radio-item">
            <input
                type="radio"
                value={props.value}
                checked={props.type === props.value}
                onChange={props.change}
                id={props.value}
            />
            <label htmlFor={props.value}>{props.text}</label>      
        </li>      
    )
}

export default RadioButton

