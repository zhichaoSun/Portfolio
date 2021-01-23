import React, { useEffect } from 'react'
import { gsap, ScrollTrigger, Power3 } from "gsap/all";

import VanillaTilt from "vanilla-tilt";

const Home = () => {

    useEffect(() => {

        VanillaTilt.init(document.querySelector(".circles"), {
            max: 5,
            speed: 400,
            reverse: true,
            "full-page-listening": true
        })

        VanillaTilt.init(document.querySelector(".content"), {
            max: 5,
            speed: 1000,
            reverse: true,
            "full-page-listening": true
        })

        gsap.timeline()
        .set([".circles", ".content"], {
            autoAlpha: 1,
        })
        .from(".circle", {
            autoAlpha: 0,
            scale: 0.6,
            duration: 1,
            xPercent: 150,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.3,
                from: "end"
            }
        })
        .to(".circle1", {
            z: 150,
        }, "<")
        .to(".circle2", {
            z: 110,
        }, "<")
        .to(".circle3", {
            z: 70,
        }, "<")
        .to(".circle4", {
            z: 30,
        }, "<")
        .from(".content", {
            autoAlpha: 0,
            duration: 1,
            xPercent: -150,
            ease: Power3.easeInOut,
        }, "<")
    }, [])

    

    return (
        <>
            <div className="divider" id="home"></div>
            <section className="home" >
                <div className="content">
                    <p className="name">SUN</p>
                </div>
                <div className="circles">
                    <div className="circle circle4"></div>
                    <div className="circle circle3"></div>
                    <div className="circle circle2"></div>
                    <div className="circle circle1"></div>
                </div>
            </section>
            {/* <section className="divider"></section> */}
        </>
    )
}

export default Home
