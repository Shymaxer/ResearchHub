import React from "react"
import FirstForm from "./FirstForm"
import Upload from "./Upload"
import StatusBar from "../atoms/StastusBar"


function UploadSection(props) {
  console.log("us",props);    return (
      <div className="upload-section">
        <StatusBar complete={'33.3%'}/>
        <Upload />
        <FirstForm {...props}/>
      </div>
      
    )
}

export default UploadSection