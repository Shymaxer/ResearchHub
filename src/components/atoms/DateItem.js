import React, {Component} from "react";



class DateItem extends Component {
    constructor({value}) {
        super();

        this.state = {
            inputValue: value,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({target}) {
        const inputValue = target.value.replace(/[^\d]/g,'');

        this.setState({
            inputValue, 
        })
    }

    render() {
        const {title,star, id, maxLength, placeholder, value} = this.props;
        const {inputValue} = this.state;

        return (
            <div className="date-item">
                <h4 className="title title--sm3">{title}<p className="star">{star}</p></h4>
                <input className="input" maxLength={maxLength}
                    id={id}
                  placeholder={placeholder}
                  value={inputValue}
                  onChange={this.handleChange}
                  ></input>
            </div>       
        )
    }
}

export default DateItem