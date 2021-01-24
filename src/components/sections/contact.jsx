import React, { useEffect } from 'react'

import { gsap, Power3, CSSRulePlugin } from "gsap/all";

import { Formik, Form } from "formik";
import * as yup from "yup"

import { TextField, Button } from "@material-ui/core";

const Contact = () => {

    gsap.registerPlugin(CSSRulePlugin)

    let rectL = CSSRulePlugin.getRule(".sectionContainer section.contact .contact-grid-container .contactL .rectL")
    let rectR = CSSRulePlugin.getRule(".sectionContainer section.contact .contact-grid-container .contactR .rectR")
    let circleL = CSSRulePlugin.getRule(".sectionContainer section.contact .contact-grid-container .contactL .circleL")
    let circleR = CSSRulePlugin.getRule(".sectionContainer section.contact .contact-grid-container .contactR .circleR")

    const enterL = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(rectL, { cssRule: { yPercent: 20, rotation: -5 }})
        .to(circleL, { cssRule: { yPercent: -20, xPercent: 7 }}, "<")
    }

    const leaveL = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(rectL, { cssRule: { yPercent: 0, rotation: 0 }})
        .to(circleL, { cssRule: { yPercent: 0, xPercent: 0 }}, "<")
    }

    const enterR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(rectR, { cssRule: { yPercent: -20, rotation: -5 }})
        .to(circleR, { cssRule: { yPercent: 20, xPercent: -7 }}, "<")
    }

    const leaveR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(rectR, { cssRule: { yPercent: 0, rotation: 0 }})
        .to(circleR, { cssRule: { yPercent: 0, xPercent: 0 }}, "<")
    }

    return (
        <>
            <div className="divider" id="contact"></div>
            <section className="contact">
                <div className="contact-grid-container">

                    <div 
                        className="contactL" 
                        onMouseEnter={enterL} 
                        onMouseLeave={leaveL}
                    >
                        <div className="rectL"></div>
                        <div className="circleL"></div>
                    </div>
                    <div 
                        className="contactR"
                        onMouseEnter={enterR} 
                        onMouseLeave={leaveR}
                    >
                        <div className="circleR"></div>
                        <div className="rectR"></div>
                    </div>
                    

                    <div className="contactForm">
                        <div className="title">
                            <h1>Contact <span>Me</span></h1>
                        </div>
                        <div className="form">
                            123
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
