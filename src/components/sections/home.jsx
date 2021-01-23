import React, { useEffect } from 'react'
import { gsap, ScrollTrigger, Power3 } from "gsap/all";

const Home = () => {

    useEffect(() => {
        gsap.timeline()
        .set(".circles", {
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
    }, [])
    return (
        <>
            <div className="divider" id="home"></div>
            <section className="home" >
                <div className="content">
                    Home Content
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
