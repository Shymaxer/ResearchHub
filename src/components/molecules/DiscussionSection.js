import React from "react"
import Input from "../atoms/Input"
import StatusBar from "../atoms/StastusBar"




function DiscussionSection(props) {
    return (
      <div className="upload-section">
        <StatusBar complete={'100%'}/>
        <div className="section-title">
            <h3 className="title title--small">Discussion</h3>
        </div>
        
        <hr className="line"></hr>
        <Input title="Title" star="" id="discussiontitle" placeholder="Title of discussion"/>
        <div className="papertitle-input">
        <h4 className="title title--sm3">Question</h4>
          <textarea id="question" className="textarea textarea--b" placeholder="Leave a question or a comment"></textarea>
        </div>     
      </div>
      
    )
}

export default DiscussionSection