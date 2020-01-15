import React, { Component } from "react";
import Select from "react-select";
import { authors} from "../data/authors";
import AddedAuthor from "./AddedAuthor";
import {MenuList} from "../atoms/MenuLIst"
import {Option} from "../atoms/SelectOption"
import AddAuthor from "../atoms/AddAuthor";
import { createPortal } from "react-dom";
import PopUp from "../molecules/PopUp";


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

    togglePop = () => {
      this.setState({
        seen: !this.state.seen
      });
      document.body.style.overflowY = "hidden"
  };
    
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
                    components={{ Option, MenuList}}
                    options={authors} 
                    hideSelectedOptions={false}
                    isSearchable="true" 
                    backspaceRemovesValue={false}
                    //menuIsOpen="true"
                    onChange={e => {this.addedAutor(e)}} 
                />
                <div>
                    {this.state.asss}
                    { this.state.asss.length > 0 && <AddAuthor onClick={this.togglePop}/> }                   
                </div>
                {this.state.seen && createPortal(<PopUp toggle={this.togglePop} />, document.body)}
              
               
                <div className="checkbox-block">
                  <input type="checkbox"  id="authorself"></input>
                  <label htmlFor="authorself" className="checkbox-label">I am an author of this paper</label>
                </div>
                
            </div>
        
        );
    }
}
