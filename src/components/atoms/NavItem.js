import React from "react"

function NavItem({ href, text }) {
    return (
            <li className="nav-item"><a className="sub-text" href={href}>{text}</a></li>
            )
}
            
export default NavItem