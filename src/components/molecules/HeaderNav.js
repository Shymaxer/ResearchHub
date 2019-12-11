import React from "react"
import NavItem from "../atoms/NavItem"

function HeaderNav(props) {
    return (
        <div className="nav">
            <ul>
                <NavItem href="#" text="About"/>
                <NavItem href="#" text="Hubs"/>
                <NavItem href="#" text="Help"/>
                
            </ul>
        </div>
    )
}

export default HeaderNav