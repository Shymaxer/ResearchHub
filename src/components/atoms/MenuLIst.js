import React, { useState } from "react";
import { createPortal } from "react-dom";
import PopUp from "../molecules/PopUp";


export const MenuList = props => {
    const {children} = props;
    let [seen, setSeen] = useState(false);
    let handleClick = () => {
        setSeen(seen = !seen);
        document.body.style.overflowY = "hidden";
      };
    return (<>
        {children}
        <div className="add-author-block">
            <p className="comment">Not listed above?</p>
            <a className="button-add-author" onClick={handleClick}>
                Add User
            </a>
            {seen && createPortal(<PopUp toggle={handleClick} />, document.body)}
        </div>
    </>)
}