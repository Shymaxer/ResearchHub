import React from "react"
import FirstForm from "./FirstForm"
import Upload from "./Upload"
import StatusBar from "../atoms/StastusBar"


function UploadSection(props) {
    
    return (
      <div className="upload-section">
        <StatusBar complete={'33.3%'}/>
        <Upload />
        <FirstForm />
      </div>
      
    )
}

export default UploadSection