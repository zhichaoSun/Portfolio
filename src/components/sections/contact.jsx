import React, { useEffect } from 'react'

import { gsap, Power3, ScrollTrigger } from "gsap/all";
import ContactForm from '../form/contactForm';

const Contact = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.timeline({ scrollTrigger: {
            markers: true,
            trigger: "#contact",
            start: "center center",
            end: "center center",
            toggleActions: "play none reverse none",
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
        .from(".formComponent", {
            stagger: {
                amount: 0.2
            },
            ease: Power3.easeInOut,
            autoAlpha: 0,
            yPercent: 100
        }, "<0.5")
        .to(".contactForm .title span", {
            color: "#ff5722",
            ease: Power3.easeInOut,
        })
        .from(".contactForm button", {
            color: "#1b1b1b",
            ease: Power3.easeInOut,
        }, "<")
    }, [])

    const enterL = () => {
        console.log("L")
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectL", { yPercent: 20, rotation: -5})
        .to(".circleL", { yPercent: -20, xPercent: 7}, "<")
    }
    const leaveL = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectL", { yPercent: 0, rotation: -15})
        .to(".circleL", { yPercent: 0, xPercent: 0}, "<")
    }
    const enterR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectR", { yPercent: -20, rotation: -5})
        .to(".circleR", { yPercent: 20, xPercent: -7}, "<")
    }
    const leaveR = () => {
        gsap.timeline({ defaults: { duration: 0.5, ease: Power3.easeInOut,}})
        .to(".rectR", { yPercent: 0, rotation: -15})
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
                            <div className="mask">
                                <h1 className="formComponent">Contact <span>Me</span></h1>
                            </div>
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
