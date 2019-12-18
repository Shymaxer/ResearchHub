import React from "react"
import TypeChoose from "./TypeChoose"
import DateInput from "./DateInput"
import Select from 'react-select'
import {select2} from "../data/select";


function FirstForm(props) {
    return (
      <div className="first-form">
        <div className="section-title">
            <h3 className="title title--small">Main information</h3>
        </div>
        <hr className="line"></hr>
        <div className="papertitle-input">
           <h4 className="title title--sm3">Paper Title<p className="star">*</p></h4>
        <input className="input" placeholder="Paste paper title"></input>
        </div>
       

        <div className="hubs-block">
          <h4 className="title title--sm3">Hubs<p className="star">*</p></h4>
          <Select className="select-hubs" classNamePrefix="select" options={select2} isMulti isSearchable="true" 
           placeholder="Select up to 3 hubs" />
        </div>
        <DateInput />
        <TypeChoose />
        <div className="hubs-block">
          <h4 className="title title--sm3">Hubs<p className="star">*</p></h4>
          <Select className="select-hubs" classNamePrefix="select" options={select2} isMulti isSearchable="true" 
           placeholder="Select up to 3 hubs" />
        </div>
      
      </div>
        
    )
}

export default FirstForm