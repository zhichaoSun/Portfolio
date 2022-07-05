import React, { useEffect } from 'react'
import { gsap, Power3 } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

function About() {
    
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
            <div className="divider" id="about"/>
            <section className="about">
                <div className="rects">
                    <div className="rect rect4"/>
                    <div className="rect rect3"/>
                    <div className="rect rect2"/>
                    <div className="rect rect1"/>
                    
                    <div className="rectContent">
                        <div>
                            <p>
                                Hi! Glad you are here. My name is <span className="orange noWrap">Zhichao Sun</span>, and I am a software developer living in Singapore.
                            </p>
                        </div>

                        <div>
                            <p>
                                I have been working on embedded system, monitoring system and full-stack IoT development for years.
                            </p>
                        </div>

                        <div>
                           <p>
                               In terms of web application development, my skillset includes: React, styled-components, NodeJS, typescript and MongoDB/MySql. And I am always happy to learn new stuff.
                           </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
