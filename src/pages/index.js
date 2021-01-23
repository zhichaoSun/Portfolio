import React, { useEffect, useState } from "react"

import { gsap, ScrollTrigger, Power3 } from "gsap/all";

import SEO from "../components/seo"

import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"
import Work from "../components/sections/work"
import Contact from "../components/sections/contact"

const IndexPage = () => {

    const [activeSection, setActiveSection] = useState("home") 

    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.create({
            trigger: "#about",
            markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => setActiveSection("about"),
            onEnterBack: () => setActiveSection("home"),
        })

        ScrollTrigger.create({
            trigger: "#work",
            markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => setActiveSection("work"),
            onEnterBack: () => setActiveSection("about")
        })

        ScrollTrigger.create({
            trigger: "#contact",
            markers: true,
            start: "50% 50%",
            end: "50% 50%",
            onEnter: () => setActiveSection("contact"),
            onEnterBack: () => setActiveSection("work")
        })
    }, []);

    return(
        <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
            <SEO title="Home" />

            <Home />

            <About />

            <Work />

            <Contact />

            {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
}

export default IndexPage
