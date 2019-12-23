import React from "react"
import Title from "../molecules/Title"
import SummarySection from "../molecules/SummarySection"


function SecondStep(props) {
    const title="Paper Upload";
    const subTitle="Step 2: Add a summary that concisely highlights the main aspects of the paper"
    return (
       <div className="step">
            <Title title={title} subTitle={subTitle}/>
            <SummarySection />
       </div>
    )
}

export default SecondStep