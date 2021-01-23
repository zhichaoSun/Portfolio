import React from "react"
// import { Link } from "gatsby"

import { gsap, Power3, ScrollToPlugin } from "gsap/all";

import { SiLinkedin, SiGithub } from "react-icons/si";

const sections = ["home", "about", "work", "contact"]

const Header = ({ activeSection, setActiveSection }) => {

    gsap.registerPlugin(ScrollToPlugin);

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
                            <a href="https://www.linkedin.com/in/zhichao-sun/" target="_blank">
                                <SiLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/zhichaoSun" target="_blank">
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
                                    // style={{
                                    //     color: activeSection === section ? "#FF5722" : "#FFFFFF"
                                    // }}
                                    className={activeSection===section ? `active` : ``}
                                    onClick={() => scrollHandler(section)}
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
