import React, { Component } from "react";
import Select, { components } from "react-select";
import PopUp from "./PopUp";
import createClass from "create-react-class";
import { authors, colours } from "../data/authors";
import AddedAuthor from "./AddedAuthor";
import { createPortal } from "react-dom";


const Option = createClass({
  render() {
    return (
      <div>
        <components.Option {...this.props}>
            <div className="author-card">
                <div className="author-card-bl-l">
                  <img className="author-avatar" src={this.props.data.avatar} alt=""></img>
                  <div className="author-desc">
                      <h5 className="author-name">{this.props.data.label}</h5>
                      <p className="author-email">{this.props.data.email}</p>
                  </div>
                </div>         
                <div className="author-checkbox">
                      <input
                        id={this.props.data.value}
                        type="checkbox"
                        checked={this.props.isSelected}
                        onChange={e => null}
                      />
                    <label htmlFor={this.props.data.value}></label>
                 </div>           
            </div>      
        </components.Option>
      </div>
    );
  }
});


export default class extends Component {
    constructor() {
        super();
        
        this.state = {
          asss: [],
          seen: false
        };
        
        this.addedAutor = this.addedAutor.bind(this);
    } 

    
    addedAutor(e) {
        this.setState({
            asss: e.map(item => <AddedAuthor key={item.id} name={item.label} email={item.email} avatar={item.avatar}/>)
          
        }); 
      
    }

    togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
    };
    
    render() {
        
        return (
            <div>
                <Select
                    className="select-authors" 
                    classNamePrefix="select-authors" 
                    closeMenuOnSelect={false}
                    isMulti
                    components={{ Option, MultiValue }}
                    options={authors} 
                    hideSelectedOptions={false}
                    isSearchable="true" 
                    backspaceRemovesValue={false}
                    /* menuIsOpen="true" */
                    onChange={e => {this.addedAutor(e)}} 
                />
                <div>
                    {this.state.asss}  
                </div>
                

                <div>
                    <div className="btn" onClick={this.togglePop}>
                    <a>New User?</a>
                    </div>
                    {this.state.seen && createPortal(<PopUp toggle={this.togglePop} />, document.body)}
                </div>
            </div>
        
        );
    }
}

const MultiValue = props => {
  return (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );
};
