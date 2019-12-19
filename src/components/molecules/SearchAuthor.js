import React, { Component } from "react";
import Select, { components } from "react-select";
import PopUp from "./PopUp";
import createClass from "create-react-class";
import { colourOptions } from "../data/authors";
import authorAvatar from "../../images/authors/author1.svg"
import AddedAuthor from "./AddedAuthor";


const Option = createClass({
  render() {
    return (
      <div>
        <components.Option {...this.props}>
            <div className="author-card">
                <img className="author-avatar" src={authorAvatar} alt=""></img>
                <div className="author-desc">
                    <h5 className="author-name">{"1"}</h5>
                    <p className="author-email">{"2"}</p>
                </div>
                <div className="author-checkbox">
                     <input
                        id={this.props.color}
                        type="checkbox"
                        checked={this.props.isSelected}
                        onChange={e => null}
                    />
                    <label htmlFor={this.props.color}></label>
                </div>
             
            </div>
          <label>{this.props.value} </label>
         
          
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
            asss: e.map(item => <AddedAuthor key={item.value} name={item.value} email={item.color}
                />)
          
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
                    options={colourOptions}
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
                    {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
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
