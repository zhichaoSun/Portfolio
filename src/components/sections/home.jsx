import React, { useEffect } from 'react'
import { gsap, ScrollTrigger, Power3 } from "gsap/all";

import C1 from "../../static/images/C1.svg"
import C2 from "../../static/images/C2.svg"
import C3 from "../../static/images/C3.svg"
import C4 from "../../static/images/C4.svg"

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
                    <div className="circle">
                        <img src={C4} alt="C4"/>
                    </div>
                    <div className="circle">
                        <img src={C3} alt="C3"/>
                    </div>
                    <div className="circle">
                        <img src={C2} alt="C2"/>
                    </div>
                    <div className="circle">
                        <img src={C1} alt="C1"/>
                    </div>
                </div>
            </section>
            {/* <section className="divider"></section> */}
        </>
    )
}

export default Home
