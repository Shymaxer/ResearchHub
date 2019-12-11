import React from "react"
import HeaderNav from "../molecules/HeaderNav"
import HeaderSearch from "../molecules/HeaderSearch"
import HeaderProfile from "../molecules/HeaderProfile"
import logoheaderpic from "../../images/logoHeaderPic.svg"
import logoheadertext from "../../images/logoHeaderText.svg"

function Header(props) {
    return (
        <header className="header">
            <div className="logo" >
                <img className="logo__image" src={logoheaderpic}></img>
                               
            </div>
            
            
            <HeaderNav />
            <HeaderSearch />
            <HeaderProfile />
            <a className="btn" href=""></a>
        </header>
    )
}

export default Header