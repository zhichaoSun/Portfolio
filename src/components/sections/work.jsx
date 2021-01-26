import React, { useEffect } from 'react'

import { gsap } from "gsap";

import { BsCaretDownFill } from "react-icons/bs";

const Work = () => {

    useEffect(() => {
        gsap.to(".work .scrollDownIndicator .icon", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".work .third svg",
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
                <div className="scrollDownIndicator">
                    <div className="icon first"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon second"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon third"><BsCaretDownFill size="2rem"/></div>
                </div>
            </section>
        </>
    )
}

export default Work
