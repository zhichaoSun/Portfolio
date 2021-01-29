import React, { useEffect } from 'react'

import { gsap, Power3 } from "gsap";

import AniLink from "gatsby-plugin-transition-link/AniLink";
import TransitionLink from "gatsby-plugin-transition-link";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";

const Work = ({scrollTo}) => {

    useEffect(() => {
        gsap.from(".work .scrollUpIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".work .scrollUpIndicator .third svg",
                start: "bottom bottom",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 0,
                // once: true
            },
            opacity: 0,
            y: "-10vh"
        })
        gsap.to(".work .scrollDownIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".work .scrollDownIndicator .third svg",
                start: "bottom bottom",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 0,
                // once: true
            },
            opacity: 0,
            y: "10vh"
        })
    }, [])

    return (
        <>
            <div className="divider" id="work"></div>
            <section className="work">
                <h1>TBD</h1>
                <p>Will put some recent work here. Might do a page transition using barba.js to another page to show something else like my photagraphy or some toys written by javascript.</p>
                <div className="scrollUpIndicator" onClick={()=>scrollTo("about")}>
                    <div className="icon first"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon second"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon third"><BsCaretUpFill size="2rem"/></div>
                </div>
                <div className="scrollRightIndicator">
                    <TransitionLink 
                        to="/toyPage"
                        exit={{
                            length: 2,
                            trigger: ({node}) => (
                                gsap.timeline()
                                .to(node, {
                                    duration: 1, 
                                    xPercent: -100, 
                                    ease: Power3.easeInOut,
                                })
                                .to(node, {
                                    duration: 1, 
                                    xPercent: -210, 
                                    opacity: 0,
                                    ease: Power3.easeInOut,
                                })
                            )
                        }}
                        entry={{
                            delay: 2,
                            length: 0.5,
                            trigger: ({node}) => (
                                gsap.timeline()
                                .from(node, {
                                    opacity: 0,
                                    duration: 0.5, 
                                    ease: Power3.easeInOut
                                })
                            )
                        }}
                    >
                        <FaHandPointRight />
                    </TransitionLink>
                    {/* <AniLink 
                        cover to="/toyPage"
                        duration={1.5}
                        direction="right"
                        bg="#ff5722"
                    >
                        <FaHandPointRight />
                    </AniLink> */}
                </div>
                <div className="scrollDownIndicator" onClick={()=>scrollTo("contact")}>
                    <div className="icon first"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon second"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon third"><BsCaretDownFill size="2rem"/></div>
                </div>
            </section>
            <div className="workSectionCover"></div>
        </>
    )
}

export default Work
