import React, { Component } from "react";
import Select, { components } from "react-select";
import { authors, colours } from "../data/authors";
import AddedAuthor from "./AddedAuthor";
import {MenuList} from "../atoms/MenuLIst"


const Option = props => 
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

export default class extends Component {
  
    constructor() {
        super();
        
        this.state = {
          selectRef: '',
          asss: [],
          seen: false,
          
        };
        this.addedAutor = this.addedAutor.bind(this);
    } 

    
    addedAutor(e) {
      if (e){
        this.setState({      
            asss: e.map(item => <AddedAuthor key={item.value}
                                              name={item.label}
                                              id={item.value}
                                              email={item.email}
                                              avatar={item.avatar}
                                              onClick={() => this.deselectOption(e, item)}/>)        
        }); 
      }else{
        this.setState({          
          asss: []
        });
      }
    }

    deselectOption(array, option){
      array.splice(array.indexOf(option), 1);
      this.state.selectRef.onChange(array, 'deselect-option');
    }
    
    render() {
        
        return (
            <div>
                <Select
                    className="select-authors" 
                    classNamePrefix="select-authors" 
                    closeMenuOnSelect={false}
                    ref={ref => {
                      this.state.selectRef = ref;
                    }}
                    isMulti
                    components={{ Option, MultiValue, MenuList}}
                    options={authors} 
                    hideSelectedOptions={false}
                    isSearchable="true" 
                    backspaceRemovesValue={false}
                    // menuIsOpen="true"
                    onChange={e => {this.addedAutor(e)}} 
                />
                <div>
                    {this.state.asss}  
                </div>
              
               
                <div className="checkbox-block">
                  <input type="checkbox"  id="authorself"></input>
                  <label htmlFor="authorself" className="checkbox-label">I am an author of this paper</label>
                </div>
                
            </div>
        
        );
    }
}

const MultiValue = props => {
  return (
    <components.MultiValue {...props}>
      <span id={props.data.value}>{props.data.label}</span>
    </components.MultiValue>
  );
};
