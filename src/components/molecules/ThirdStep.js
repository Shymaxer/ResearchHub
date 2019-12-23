import React from "react"
import Title from "../molecules/Title"



function ThirdStep(props) {
    const title="Paper Upload";
    const subTitle="Step 3: Start a discussion on the paper"
    return (
       <div className="step">
           <Title title={title} subTitle={subTitle}/>
            
       </div>
    )
}

export default ThirdStep