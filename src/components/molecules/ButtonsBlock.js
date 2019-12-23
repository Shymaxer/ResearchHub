import React from "react"
import prev from "../../images/prev.svg"


function ButtonsBlock(props) {

    return (
        <div className="buttons-block">
            <a className="button-step button-step--prev button-step--ff" onClick={props.click3}><img className="prev-i"
            src={prev} alt=""></img>
            {props.name3}</a>
            <div className="main-buttons">
                <a className="button-step button-step--border button-step--ff" onClick={props.click1}>{props.name1}</a>
                <a className="button-step button-step--ff"  onClick={props.click2}>{props.name2}</a>
            </div>
        </div>
    )
}

export default ButtonsBlock