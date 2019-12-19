import React, { Component } from "react";
import Input from "../atoms/Input"
import {inputs, linksinputsdata} from "../data/inputs"

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    const inputsdata = inputs.map(item => <Input key={item.key} title={item.title} star={item.star}
      palceholder={item.placeholder}/>);
    const linksinputs = linksinputsdata.map(item => <Input key={item.key} icon={item.icon} 
      palceholder={item.placeholder}/>);
    return (
      <div className="modal-window">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <div className="section-title">
            <h3 className="title">Add New Author</h3>
            <p className="sub-tittle">Please enter the information about the user below</p>
          </div>
          <form>
            {inputsdata}
            {linksinputs}
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
