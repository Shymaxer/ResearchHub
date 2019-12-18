import React, {Component} from "react"
import RadioButton from "../atoms/RadioButton";
import {types} from "../data/types"



class TypeChoose extends Component {
    constructor() {
        super();
        
        this.state = {
          type: ''
        };
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(event) {
        this.setState({
            type: event.target.value
        });
    }

    render() {
        const radioButtons = types.map(item => <RadioButton key={item.value} value={item.value} type={this.state.type}
             text={item.text} change={this.handleChange}/>);
        return (
            <div className="type-choose">
                <h4 className="title title--sm3">Type</h4>
                <ul>
                    {radioButtons}
                </ul>
            </div>
        
        );
   } 
    
}

export default TypeChoose