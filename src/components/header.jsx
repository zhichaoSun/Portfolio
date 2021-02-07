import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { gsap, Power3, ScrollToPlugin, ScrollTrigger } from "gsap/all";

import { SiLinkedin, SiGithub } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { IoLanguage } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { ImCross } from "react-icons/im";

import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar";

const sections = ["home", "about", "work", "contact"]

const colors = {
    white: "#f7f7f7",
    black: "#1b1b1b",
    gray: "#2b2b2b88",
    orange: "#ff5722"
}

const Header = () => {

    const [width, setWidth] = useState(0)
    const [sidebar, setSidebar] = useState(false)

    useEffect(() => {
        // gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

        gsap.timeline()
        .set([".links p", ".links a"], {
            autoAlpha: 1,
        })
        .from("header", {
            duration: 2,
            ease: Power3.easeInOut,
            autoAlpha: 0,
        })
        .to("#p-home", {
            color: colors.orange,
            scale: 1.25,
            ease: Power3.easeInOut,
            duration: 1,
        }, "<")
        .from(".links p", {
            duration: 1,
            yPercent: 200,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.2,
                from: "start",
            }
        }, "<")
        .from(".social-links li", {
            duration: 1,
            yPercent: 200,
            ease: Power3.easeInOut,
            stagger: {
                amount: 0.2,
                from: "end",
            }
        }, "<")

        gsap.to(["header", ".sideToggle"], { 
            scrollTrigger: {
                // markers: true,
                trigger: "#home",
                start: "bottom top",
                end: "bottom top",
                toggleActions: "play none reverse none"
            },
            duration: 0.5,
            ease: Power3.easeInOut,
            backgroundColor: colors.gray,
            boxShadow: "0px 2px 10px $black"
        })

    }, [])

    const scrollTo = (section) => {
        gsap.to(window, {
            duration: 0.5, 
            scrollTo: `#${section}`,
            ease: Power3.easeInOut
        });
    }

    const data = useStaticQuery(graphql`{
        allFile(filter: {extension: {eq: "pdf"}}) {
            edges {
                node {
                    name
                    publicURL
                }
            }
        }
    }`)

    const updateWidth = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
        }
    }, [window.innerWidth])

    // console.log(width)

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="links social-links">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/zhichao-sun/" target="_blank">
                                    <SiLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/zhichaoSun" target="_blank">
                                    <SiGithub />
                                </a>
                            </li>
                            <li>
                                <a href={data.allFile.edges[0].node.publicURL} target="_blank">
                                    <FaFilePdf />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="links section-links">
                        <ul style={{visibility: width>800 ? "visible" : "hidden"}}>
                        {
                            sections.map(section => (
                                <li key={section}>
                                    <p
                                        onClick={() => scrollTo(section)}
                                        id={`p-${section}`}
                                    >
                                        {section}
                                    </p>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    {/* <div className="links toggle">
                        <ul>
                            <li onClick={() => alert("Do not click on me")}>
                                <p><CgDarkMode /></p>
                            </li>
                            <li onClick={() => alert("Do not click on me")}>
                                <p><IoLanguage /></p>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </header>
            <div style={{visibility: (width<=800) ? "visible" : "hidden"}}>
                <div className="sideToggle" onClick={()=>setSidebar(!sidebar)}>
                {
                    sidebar
                    ? <ImCross />
                    : <HiDotsVertical />
                }
                    
                </div>
                <div style={{visibility: sidebar ? "visible" : "hidden"}}>
                    <Sidebar sections={sections} setSidebar={setSidebar}/>
                </div>
            </div>
        </>
    );
}


export default Header
