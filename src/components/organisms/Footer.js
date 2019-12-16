import React from "react"
import logo from "../../images/footerLogo.svg"
import FooterNav from "../molecules/FooterNav"
import SocilaLinks from "../molecules/SocialLinks"
import {navMain, navPolicy} from "../data/navItems"


function Footer(props) {
    return (
        <footer className="footer">
            <div className="footer__left">
                <a className="logo logo--footer" href="#">
                    <img src={logo}></img>                          
                </a>

                <FooterNav items={navMain}/>
            </div>
           <div className="footer__right">
                <FooterNav items={navPolicy}/>
                <SocilaLinks />
                <h5 className="sub-text sub-text--white">© ResearchHub 2019. All rights reserved</h5>
           </div>
        </footer>
    )
}

export default Footer