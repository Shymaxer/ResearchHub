import React from "react"
import DateItem from "../atoms/DateItem"
import {dateparts} from "../data/dateparts"

function DateInput(props) {
    const dateParts = dateparts.map(item => <DateItem key={item.placeholder} title={item.title} star={item.star}
        placeholder={item.placeholder} />);
    return (
        <div className="date-block">
            {dateParts}
        </div>       
    )
}

export default DateInput