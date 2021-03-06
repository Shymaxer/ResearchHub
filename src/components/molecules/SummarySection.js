import React from "react"
import TextAreaBlock from "./TextAreaBlock";
import {textareas} from "../data/textareas"
import StatusBar from "../atoms/StastusBar"



function SummarySection(props) {
    const textAreas = textareas.map(item => <TextAreaBlock key={item.key} id={item.id} title={item.title} placeholder={item.placeholder}/>);
    return (
      <div className="upload-section">
        <StatusBar complete={'66.6%'}/>
        <div className="section-title">
            <h3 className="title title--small">Summary</h3>
            <a className="sub-title sub-title--small">Summary Guidelines</a>
        </div>
        
        <hr className="line"></hr>
        <div className="summary-content">
          {textAreas}
        </div>

      </div>
      
    )
}

export default SummarySection