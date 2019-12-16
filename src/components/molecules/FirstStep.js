import React from "react"
import Title from "../molecules/Title"
import UploadSection from "../molecules/UploadSection"


function FirstStep(props) {
    const title="Paper Upload";
    const subTitle="Step 1: Main Information"
    return (
       <div className="step">
           <Title title={title} subTitle={subTitle}/>
            <UploadSection />
       </div>
    )
}

export default FirstStep