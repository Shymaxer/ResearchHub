import React from "react"
import FirstForm from "./FirstForm"
import Upload from "./Upload"


function UploadSection(props) {
    return (
      <div className="upload-section">
        <Upload />
        <FirstForm />
      </div>
      
    )
}

export default UploadSection