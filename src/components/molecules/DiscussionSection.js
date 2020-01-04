import React from "react"
import Input from "../atoms/Input"




function DiscussionSection(props) {
    return (
      <div className="upload-section">
        <div className="section-title">
            <h3 className="title title--small">Discussion</h3>
        </div>
        
        <hr className="line"></hr>
        <Input title="Title" star="" placeholder="Title of discussion"/>
          

      </div>
      
    )
}

export default DiscussionSection