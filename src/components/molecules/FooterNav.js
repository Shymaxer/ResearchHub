import React from "react"
import NavItem from "../atoms/NavItem"



function FooterNav(props) {
    const navItems = props.items.map(item => <NavItem key={item.name} href={item.href} text={item.text} />)
    return (
        <div className="nav nav--footer">
            <ul>
                {navItems}   
            </ul>
        </div>
    )
}

export default FooterNav