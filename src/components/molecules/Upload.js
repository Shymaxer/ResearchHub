import React from "react"
import DropZone from "./DropZone"


function Upload(props) {
    return (
      <div className="upload">
          <div className="section-title">
              <h3 className="title title--small">Academic Paper</h3>
              <h5 className="sub-title sub-title--small">Up to 15 MB (.pdf)</h5>
          </div>
        
        <hr className="line"></hr>
        <DropZone />
        <p className="sub-title sub-title--small sub-title--small2">or paste a url to the paper</p>
        <input className="input" type="link" placeholder="Paste a url to the paper"></input>
      </div>
      
    )
}

export default Upload