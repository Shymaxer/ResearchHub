import React from "react"



function TextAreaBlock(props) {
    return (
      <div className="textarea-block">
        <h4 className="textarea-title">{props.title}</h4>
        <textarea id={props.id} className="textarea" placeholder={props.placeholder}></textarea>
      </div>
      
    )
}

export default TextAreaBlock