import React from "react"



function FirstForm(props) {
    return (
      <div className="first-form">
        <div className="section-title">
            <h3 className="title title--small">Main information</h3>
        </div>
        <hr className="line"></hr>

          <h4 className="title title--sm3">Paper Title<p className="star">*</p></h4>
          <input className="input" placeholder="Paste paper title"></input>
      </div>
        
    )
}

export default FirstForm