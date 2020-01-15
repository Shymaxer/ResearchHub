import React from "react"


function AddAuthor(props) {
    return (
       <div className="author-card author-card--gray" onClick={props.onClick}> 
           <div className="author-card-bl-l">
               <div className="add-btn"></div>
               <div className="author-desc">
                    <h5 className="author-name">Add New User</h5>
                    <p className="author-email">Click to add new user on Research Hub</p>
               </div>
           </div> 
       </div>
    )
}

export default AddAuthor