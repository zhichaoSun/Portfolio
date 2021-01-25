import React, { useEffect } from "react"
// import { Link } from "gatsby"
import { gsap, Power3, ScrollToPlugin, ScrollTrigger } from "gsap/all";

import { SiLinkedin, SiGithub } from "react-icons/si";

const sections = ["home", "about", "work", "contact"]

const colors = {
    white: "#f7f7f7",
    black: "#1b1b1b",
    gray: "#2b2b2b88",
    orange: "#ff5722"
}

const Header = () => {

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

        gsap.to("header", { 
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

    const scrollHandler = (section) => {
        // setActiveSection(section)
        gsap.to(window, {
            duration: 0.5, 
            scrollTo: `#${section}`,
            ease: Power3.easeInOut
        });
    }

    return (
        <header>
            <div className="header-container">
                <div className="links social-links">
                    <ul>
                        <li>
                            <a className="adfadf" href="https://www.linkedin.com/in/zhichao-sun/" target="_blank">
                                <SiLinkedin />
                            </a>
                        </li>
                        <li>
                            <a className="adfadf" href="https://github.com/zhichaoSun" target="_blank">
                                <SiGithub />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="links section-links">
                    <ul>
                    {
                        sections.map(section => (
                            <li key={section}>
                                <p
                                    onClick={() => scrollHandler(section)}
                                    id={`p-${section}`}
                                >
                                    {section}
                                </p>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </header>
    );
}


export default Header
