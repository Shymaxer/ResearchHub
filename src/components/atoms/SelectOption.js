import React from "react";
import { components } from "react-select";

export const Option = props => 
    <components.Option {...props}>
            <div className="author-card">
                <div className="author-card-bl-l">
                    <img className="author-avatar" src={props.data.avatar} alt=""></img>
                    <div className="author-desc">
                        <h5 className="author-name">{props.data.label}</h5>
                        <p className="author-email">{props.data.email}</p>
                    </div>
                </div>         
                <div className="author-checkbox">
                        <input
                        id={props.data.value}
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={e => null}
                        />
                    <label htmlFor={props.data.value}></label>
                </div>           
            </div>      
    </components.Option>