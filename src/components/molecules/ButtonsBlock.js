import React from "react"
import prev from "../../images/prev.svg"
import {Link} from "react-router-dom"


function ButtonsBlock(props) {

    return (
        <div className="buttons-block">
            <Link className="button-step button-step--prev button-step--ff" to={props.stepPrev} onClick={props.click3}>
                <img className="prev-i"
                src={prev} alt=""></img>
                {props.name3}
            </Link>
            <div className="main-buttons">
                <Link className="button-step button-step--border button-step--ff" to={props.stepNext} onClick={props.click1}>
                    {props.name1}
                </Link>
                <Link className="button-step button-step--ff" to={props.stepNext} onClick={props.click2}>
                    {props.name2}
                </Link>            
            </div>
        </div>
    )
}

export default ButtonsBlock