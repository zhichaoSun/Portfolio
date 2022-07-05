import React, { useEffect } from 'react'
import { gsap, Power3 } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

const Home = () => {

    useEffect(() => {

        VanillaTilt.init(document.querySelector(".home .layers"), {
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

        gsap.timeline()
        .set(".layerContent p", {
            autoAlpha: 1,
        })
        .to("html", {
            opacity: 1,
            duration: 0.5,
        })
        .from(".home .layerCircle", {
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
        .from(".home .layerContent", {
            autoAlpha: 0,
            duration: 1,
            xPercent: -50,
            ease: Power3.easeInOut,
        }, "<")
        .to(".home .layerContent", { z: 200,}, "<")
        .to(".home .circle1", { z: 0,}, "<")
        .to(".home .circle2", { z: -200,}, "<")
        .to(".home .circle3", { z: -400,}, "<")
        .to(".home .circle4", { z: -600,}, "<")

        gsap.to(".home .scrollDownIndicator", { 
            scrollTrigger: {
                // markers: true,
                trigger: ".home .scrollDownIndicator .third svg",
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
            <div className="divider" id="home"/>
            <section className="home">
                <div className="layers">
                    <div className="layerCircle circle4"/>
                    <div className="layerCircle circle3"/>
                    <div className="layerCircle circle2"/>
                    <div className="layerCircle circle1"/>
                    <div className="layerContent">
                        <div><p className="name1">Zhichao</p></div>
                        <div><p className="name1">SUN</p></div>
                        <div><p className="name3">IoT Engineer /</p></div>
                        <div><p className="name3">Full-stack Developer</p></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
