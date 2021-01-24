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
        .from(".about .rectContent p", {
            duration: 0.5,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.2,
            },
            autoAlpha: 0,
            yPercent: 100,
        }, ">")
        .to(".about .rectContent", {
            z: 0,
        }, "<")
        .to(".about .rect1", {
            z: -200,
        }, "<-1")
        .to(".about .rect2", {
            z: -400,
        }, "<")
        .to(".about .rect3", {
            z: -600,
        }, "<")
        .to(".about .rect4", {
            z: -800,
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
                    <div className="rect rect1">r1</div>
                    <div className="rectContent">
                        <div><p>About Content</p></div>
                        <div><p>About Content</p></div>
                        <div><p>About Content</p></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
