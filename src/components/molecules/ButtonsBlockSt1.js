import React from "react"


function ButtonsBlockSt1(props) {

    return (
        <div className="buttons-block">
            <a className="button-step button-step--border" onClick={props.click1}>{props.name1}</a>
            <a className="button-step"  onClick={props.click2}>{props.name2}</a>
        </div>
    )
}

export default ButtonsBlockSt1