import React from "react"
import HeaderNav from "../molecules/HeaderNav"
import HeaderSearch from "../molecules/HeaderSearch"
import HeaderProfile from "../molecules/HeaderProfile"
import logoheaderpic from "../../images/logoHeaderPic.svg"


function Header(props) {
    return (
        <header className="header">
            <a className="logo" href="#">
                <img className="logo__image" src={logoheaderpic}></img>                          
            </a>
                   
            <HeaderNav />
            <HeaderSearch href="#"/>
            <HeaderProfile />
            <a className="button sub-text sub-text--white sub-text--lh" href="#">Add a Paper</a>
        </header>
    )
}

export default Header