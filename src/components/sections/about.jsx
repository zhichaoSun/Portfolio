import React from 'react'

import R1 from "../../static/images/R1.svg"
import R2 from "../../static/images/R2.svg"
import R3 from "../../static/images/R3.svg"
import R4 from "../../static/images/R4.svg"

function About() {
    return (
        <>
            <section className="about" id="about">
                <div className="rects">
                    <div className="rect">
                        <img src={R4} alt="R4"/>
                    </div>
                    <div className="rect">
                        <img src={R3} alt="R3"/>
                    </div>
                    <div className="rect">
                        <img src={R2} alt="R2"/>
                    </div>
                    <div className="rect">
                        <img src={R1} alt="R1"/>
                    </div>
                </div>
                <div className="content">
                    About Content
                </div>
            </section>
            <div className="divider"></div>
        </>
    )
}

export default About
