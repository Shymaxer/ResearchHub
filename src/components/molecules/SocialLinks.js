import React from "react"
import fbIcon from "../../images/icons/fbIcon.svg"
import twIcon from "../../images/icons/twIcon.svg"
import inIcon from "../../images/icons/inIcon.svg"

function SocialLinks(props) {
    return (
        <div className="social-links">
            <ul>
                <li><a href="#"><img src={inIcon} alt=""></img></a></li>
                <li><a href="#"><img src={twIcon} alt=""></img></a></li>
                <li><a href="#"><img src={fbIcon} alt=""></img></a></li>
            </ul>
        </div>
    )
}

export default SocialLinks