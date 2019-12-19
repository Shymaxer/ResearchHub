import React from "react"


function AddedAuthor(props) {

    return (
       <div className="">
           {props.name}
           {props.email}
       </div>
    )
}

export default AddedAuthor