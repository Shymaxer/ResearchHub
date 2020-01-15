import React, { Component } from "react";
import Input from "../atoms/Input";
import SMLink from "../atoms/SMLink";
import {inputs, linksinputsdata} from "../data/inputs";
import closeImg from "../../images/icons/close.svg"; 


export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
    document.body.style.overflowY = "scroll";
  };

  render() {
    const inputsdata = inputs.map(item => <Input key={item.key} title={item.title} star={item.star}
      placeholder={item.placeholder}/>);
    const linksinputs = linksinputsdata.map(item => <SMLink key={item.key} icon={item.icon} 
      placeholder={item.placeholder}/>);
    return (
      <div className="modal-window">
        <div className="modal_content">
          <img src={closeImg} alt="" className="close" onClick={this.handleClick}>
           
          </img>
          <div className="section-title">
            <h3 className="title">Add New Author</h3>
            <p className="sub-tittle">Please enter the information about the user below</p>
          </div>
          <form>

            {inputsdata}
            <div className="social-media-links">
              <h4 className="title title--sm3">Social Media Links<p className="star"></p></h4>
              {linksinputs}
            </div>
            <button className="popup-button" type="submit">Add user</button>
          </form>
        </div>
      </div>
    );
  }
}
