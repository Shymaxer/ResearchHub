import React from "react"
import DropZone from "./DropZone"

function runScript({keyCode}) {
  const KEY_CODE_ENTER = 13;

  if (keyCode === KEY_CODE_ENTER) {
      var tb = document.getElementById("link");
      return false; 
  }
}

function Upload(props) {
    return (
      <div className="upload">
          <div className="section-title">
              <h3 className="title title--small">Academic Paper</h3>
              <h5 className="sub-title sub-title--small">Up to 15 MB (.pdf)</h5>
          </div>
        
        <hr className="line"></hr>
        <DropZone />
        <div className="link-upload">
            <p className="sub-title sub-title--small sub-title--small2">or paste a url to the paper</p>
          <input className="input" id="link" placeholder="Paste a url to the paper" onKeyPress={(e) => runScript(e)}></input>
        </div>
        
      
      </div>
      
    )
}

export default Upload