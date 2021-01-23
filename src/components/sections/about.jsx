import React, { useEffect } from 'react'
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

function About() {
    
    useEffect(() => {

        VanillaTilt.init(document.querySelector(".about .rects"), {
            max: 5,
            speed: 400,
            reverse: true,
            "full-page-listening": true
        })

        VanillaTilt.init(document.querySelector(".about .content"), {
            max: 5,
            speed: 1000,
            reverse: true,
            "full-page-listening": true
        })

        gsap.registerPlugin(ScrollTrigger)

        gsap.timeline({ scrollTrigger: {
            markers: true,
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
        .from(".about .content p", {
            duration: 0.5,
            ease: Power3.easeInOut,
            yPercent: 100,
            autoAlpha: 0
        }, ">")
        .to(".about .rect1", {
            z: 150,
        }, "<-1")
        .to(".about .rect2", {
            z: 110,
        }, "<")
        .to(".about .rect3", {
            z: 70,
        }, "<")
        .to(".about .rect4", {
            z: 30,
        }, "<")
    }, [])


    return (
        <>
            <div className="divider" id="about"></div>
            <section className="about">
                <div className="rects">
                    <div className="rect rect4">r4</div>
                    <div className="rect rect3">r3</div>
                    <div className="rect rect2">r2</div>
                    <div className="rect rect1"></div>
                </div>
                <div className="content">
                    <div><p>About Content</p></div>
                    <div><p>About Content</p></div>
                    <div><p>About Content</p></div>
                </div>
            </section>
            {/* <div className="divider"></div> */}
        </>
    )
}

export default About
