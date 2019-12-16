import React from "react"



function Title(props) {
    return (
        <section className="section-title">
            <h2 className="title">{props.title}</h2>
            <h4 className="sub-title">{props.subTitle}</h4>
        </section>
    )
}

export default Title