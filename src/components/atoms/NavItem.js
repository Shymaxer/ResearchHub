import React from "react"

function NavItem(props) {
    return (
            <li className="nav-item"><a className="sub-text" href={props.href}>{props.text}</a></li>
            )
}
            
export default NavItem