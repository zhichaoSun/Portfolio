import React from 'react'
import { gsap, Power3, ScrollToPlugin, ScrollTrigger } from "gsap/all";

const Sidebar = ({sections, setSidebar}) => {

    const scrollTo = (section) => {
        gsap.to(window, {
            duration: 0.5, 
            scrollTo: `#${section}`,
            ease: Power3.easeInOut
        });
        setSidebar(false)
    }

    return (
        <div className="sidebar">
            <ul>
            {
                sections.map(section => (
                    <li key={`s-${section}`} onClick={()=>scrollTo(section)}>
                        <p id={`s-${section}`}>
                            {section}
                        </p>
                    {
                        section!="contact"
                        &&
                        <div className="hr"></div>
                    }
                    </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Sidebar
