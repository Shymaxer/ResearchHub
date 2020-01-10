import React from "react"


function AddedAuthor(props) {

    return (
       <div className="author-card author-card--gray">
           <div className="author-card-bl-l">
               <img className="author-avatar" src={props.avatar} alt=""></img>
               <div className="author-desc">
                    <h5 className="author-name">{props.name}</h5>
                    <p className="author-email">{props.email}</p>
               </div>
           </div>
           <button className="remove-button remove-button--author"></button>
             
       </div>
    )
}

export default AddedAuthor