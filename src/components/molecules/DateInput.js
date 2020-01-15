import React from "react"
import DateItem from "../atoms/DateItem"
import {dateparts} from "../data/dateparts"

function DateInput(props) {
    const dateParts = dateparts.map(item => <DateItem key={item.placeholder}
                                                            maxLength={item.maxlength}
                                                            id={item.id} 
                                                            title={item.title} 
                                                            star={item.star}
                                                            placeholder={item.placeholder}
                                                            value={props[item.id]} />);
    return (
        <div className="date-block">
            {dateParts}
        </div>       
    )
}

export default DateInput