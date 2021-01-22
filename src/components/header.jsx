import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { SiLinkedin, SiGithub } from "react-icons/si";


const Header = ({sections}) => {

    const [currenthash, setCurrenthash] = useState("")

    useEffect(() => {
        setCurrenthash(window.location.hash)
    }, [window.location.hash])

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
                        sections.map((section, index) => (
                            <li key={section}>
                                <Link 
                                    href={`#${section}`} 
                                    style={{
                                        color: ("#"+section === currenthash) || (currenthash==="" && section==="home") 
                                                ? "#FF5722" 
                                                : "#FFFFFF"
                                    }}
                                >
                                    {section}
                                </Link>
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
