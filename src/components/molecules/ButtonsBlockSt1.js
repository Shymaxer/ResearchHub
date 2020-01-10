import React from "react"
import {Link} from "react-router-dom"


function ButtonsBlockSt1(props) {

    return (
        <div className="buttons-block">
            <Link className="button-step button-step--border" to="" onClick={props.click1}>
               {props.name1}
            </Link>
            <Link className="button-step" to={props.stepNext} onClick={props.click2}>
                {props.name2}
            </Link>
            
        </div>
    )
}

export default ButtonsBlockSt1