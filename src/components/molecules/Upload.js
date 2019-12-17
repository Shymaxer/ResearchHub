import React from "react"
import DropZone from "./DropZone"

function runScript(e) {
  //See notes about 'which' and 'key'
  console.log(e.keyCode);
  if (e.keyCode == 13) {
      var tb = document.getElementById("link");
      console.log(tb);
      return false; // returning false will prevent the event from bubbling up.
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