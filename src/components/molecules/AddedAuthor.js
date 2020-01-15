import React from "react"


function AddedAuthor(props) {
    return (
       <div className="author-card author-card--gray"> 
           <div className="author-card-bl-l" id={props.id}>
               <img className="author-avatar" src={props.avatar} alt=""></img>
               <div className="author-desc">
                    <h5 className="author-name">{props.name}</h5>
                    <p className="author-email">{props.email}</p>
               </div>
           </div>
           <a className="remove-button remove-button--author" onClick={props.onClick}></a>     
       </div>
    )
}

export default AddedAuthor