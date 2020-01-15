import React from "react"



function DateItem(props) {
    return (
        <div className="date-item">
            <h4 className="title title--sm3">{props.title}<p className="star">{props.star}</p></h4>
            <input className="input" maxLength={props.maxLength}
             id={props.id}
              placeholder={props.placeholder}
              onKeyUp = {e => {e.target.value = e.target.value.replace(/[^\d]/g,'')}}
              defaultValue={props.value}></input>
        </div>       
    )
}

export default DateItem