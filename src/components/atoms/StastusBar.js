import React from "react"




function StatusBar(props) {
    
    return (
        <div className="statusbar">
            <div className="sb-wrapper">
                <span className="sb-uncomplete"></span>
                <span style={{width:props.complete}}className="sb-complete"></span>
            </div>
        </div>
        
      
    )   
}

export default StatusBar


