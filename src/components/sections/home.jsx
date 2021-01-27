import React, { useEffect } from 'react'
import { gsap, Power3 } from "gsap/all";
import VanillaTilt from "vanilla-tilt";

import { BsCaretDownFill } from "react-icons/bs";

const Home = ({scrollTo}) => {

    useEffect(() => {

        VanillaTilt.init(document.querySelector(".home .layers"), {
            max: 5,
            speed: 400,
            reverse: true,
            "full-page-listening": true,
            reset: false,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,    
            gyroscopeMinAngleY: -45,  
            gyroscopeMaxAngleY: 45, 
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
            <div className="divider" id="home"></div>
            <section className="home">
                <div className="layers">
                    <div className="todo">
                        <ul>
                            #TODO:
                            <li>To add real content</li>
                            <li>To add reCAPTCHA for message form submission</li>
                            <li>To add responsible for mobile devices</li>
                        </ul>
                    </div>
                    <div className="layerCircle circle4"></div>
                    <div className="layerCircle circle3"></div>
                    <div className="layerCircle circle2"></div>
                    <div className="layerCircle circle1"></div>
                    <div className="layerContent">
                        <div><p className="name1">My Name</p></div>
                        <div><p className="name2">Sth. else</p></div>
                        <div><p className="name3">Lorem ipsum dolor sit amet.</p></div>
                    </div>
                </div>
                <div className="scrollDownIndicator" onClick={()=>scrollTo("about")}>
                    <div className="icon first"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon second"><BsCaretDownFill size="2rem"/></div>
                    <div className="icon third"><BsCaretDownFill size="2rem"/></div>
                </div>
            </section>
        </>
    )
}

export default Home
