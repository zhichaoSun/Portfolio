import React, { useEffect } from "react"
import { gsap, ScrollTrigger, Power3 } from "gsap/all";

import SEO from "../components/seo"

import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"
import Work from "../components/sections/work"
import Contact from "../components/sections/contact"

const colors = {
    white: "#f7f7f7",
    black: "#1b1b1b",
    orange: "#ff5722"
}

const IndexPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        // gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: "#about",
            // markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => (
                gsap.timeline()
                .to("#p-about", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                })
                .to("#p-home", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                }, "<")
            ),
            onEnterBack: () => (
                gsap.timeline()
                .to("#p-about", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                })
                .to("#p-home", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                }, "<")
            ),
        })

        ScrollTrigger.create({
            trigger: "#work",
            // markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => (
                gsap.timeline()
                .to("#p-work", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                })
                .to("#p-about", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                }, "<")
            ),
            onEnterBack: () => (
                gsap.timeline()
                .to("#p-work", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                })
                .to("#p-about", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                }, "<")
            ),
        })

        ScrollTrigger.create({
            trigger: "#contact",
            // markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => (
                gsap.timeline()
                .to("#p-contact", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                })
                .to("#p-work", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                }, "<")
            ),
            onEnterBack: () => (
                gsap.timeline()
                .to("#p-contact", {
                    duration: 0.3,
                    color: colors.white,
                    scale: 1,
                    ease: Power3.easeInOut
                })
                .to("#p-work", {
                    duration: 0.3,
                    color: colors.orange,
                    scale: 1.25,
                    ease: Power3.easeOut
                }, "<")
            ),
        })
    }, []);

    const scrollTo = id => {
        gsap.to(window, {
            duration: 0.5, 
            scrollTo: `#${id}`,
            ease: Power3.easeInOut
        });
    }


    return(
        <Layout scrollTo={scrollTo} >
            <SEO title="Home" /> {/* Actually not really want to be searched. */}
            <Home/>
            <About/>
            <Work/>
            <Contact/>
        </Layout>
    )
}

export default IndexPage
