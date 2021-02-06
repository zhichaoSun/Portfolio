import React, { useEffect } from 'react'
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

function About({scrollTo}) {
    
    useEffect(() => {

        VanillaTilt.init(document.querySelector(".about .rects"), {
            max: 5,
            speed: 400,
            reverse: true,
            "full-page-listening": true,
            reset: false,
            gyroscope: true,
            gyroscopeMinAngleX: -15,
            gyroscopeMaxAngleX: 15,    
            gyroscopeMinAngleY: -15,  
            gyroscopeMaxAngleY: 15, 
        })

        // gsap.registerPlugin(ScrollTrigger)

        gsap.timeline({ scrollTrigger: {
            // markers: true,
            trigger: "#about",
            start: "center center",
            end: "center center",
            toggleActions: "play none none none"
        }})
        .from([".about .rect"], {
            duration: 0.5,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.3
            },
            scale: 1.2,
            xPercent: -150,
            autoAlpha: 0
        })
        .from(".about .rectContent p", {
            duration: 0.5,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.2,
            },
            autoAlpha: 0,
            yPercent: 100,
        }, ">")
        .to(".about .rectContent", { z: 200,}, "<")
        .to(".about .rect1", { z: 0,}, "<-1")
        .to(".about .rect2", { z: -200,}, "<")
        .to(".about .rect3", { z: -400,}, "<")
        .to(".about .rect4", { z: -600,}, "<")

        gsap.from(".about .scrollUpIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".about .scrollUpIndicator .third svg",
                start: "bottom bottom",
                end: "bottom center",
                toggleActions: "play none none none",
                scrub: 0,
                // once: true
            },
            opacity: 0,
            y: "-10vh"
        })
        gsap.to(".about .scrollDownIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".about .scrollDownIndicator .third svg",
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
            <div className="divider" id="about"></div>
            <section className="about">
                <div className="rects">
                    <div className="rect rect4"></div>
                    <div className="rect rect3"></div>
                    <div className="rect rect2"></div>
                    <div className="rect rect1"></div>
                    <div className="rectContent">
                        <div>
                            <p>
                                Hello! My name is <span className="orange">Zhichao Sun</span>, and I am a web application developer living in Singapore.
                            </p>
                        </div>

                        <div>
                            <p>
                                My favorite technologies right now are: ReactJS, Node and GraphQL. Currently, I am super comfortable using <span className="orange">MERN</span> stack to build my porject.
                            </p>
                        </div>

                        <div>
                            <p>
                                I am not going to stop learning new stuff. In recent days, I have got some interests in Jest, Typescript and TailwindCSS.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="scrollUpIndicator" onClick={()=>scrollTo("home")}>
                    <div className="icon first"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon second"><BsCaretUpFill size="2rem"/></div>
                    <div className="icon third"><BsCaretUpFill size="2rem"/></div>
                </div>
                <div className="scrollDownIndicator" onClick={()=>scrollTo("work")}>
                    <div className="icon first"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon second"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon third"><BsCaretDownFill size="2rem"/></div>
                </div>
            </section>
        </>
    )
}

export default About
