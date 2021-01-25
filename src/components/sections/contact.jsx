import React, { useEffect } from 'react'

import { gsap, Power3, ScrollTrigger } from "gsap/all";
import ContactForm from '../form/contactForm';

const Contact = () => {

    useEffect(() => {
        // gsap.registerPlugin(CSSRulePlugin, ScrollTrigger)

        gsap.timeline({ scrollTrigger: {
            // markers: true,
            trigger: "#contact",
            start: "center center",
            end: "center center",
            toggleActions: "play none reverse none"
        }})
        .set([".rectL", ".circleL", ".rectR", ".circleR"], { autoAlpha: 1})
        .from([".rectL", ".circleL"], {
            scale: 0, 
            autoAlpha: 0,
            stagger: {
                amount: 0.2, from: "start"
            },
            ease: Power3.easeInOut  
        })
        .from([".rectR", ".circleR"], {
            scale: 0, 
            autoAlpha: 0,
            stagger: {
                amount: 0.2, from: "end"
            },
            ease: Power3.easeInOut  
        }, "<")
    }, [])

    const enterL = () => {
        console.log("L")
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectL", { yPercent: 20, rotation: -5 })
        .to(".circleL", { yPercent: -20, xPercent: 7}, "<")
    }
    const leaveL = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectL", { yPercent: 0, rotation: 0})
        .to(".circleL", { yPercent: 0, xPercent: 0}, "<")
    }
    const enterR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectR", { yPercent: -20, rotation: -5})
        .to(".circleR", { yPercent: 20, xPercent: -7}, "<")
    }
    const leaveR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectR", { yPercent: 0, rotation: 0})
        .to(".circleR", { yPercent: 0, xPercent: 0}, "<")
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
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact
