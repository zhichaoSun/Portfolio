import React, { useEffect } from 'react'
import Layout from '../components/layout'
import TransitionLink from "gatsby-plugin-transition-link";

import { gsap, Power3 } from "gsap";

const ToyPage = () => {

    return (
        <>
            <div className="toyPageCover"></div>
            <div className="toyPage">
                <TransitionLink 
                    to="/"
                    exit={{
                        length: 0.8,
                        trigger: ({node}) => (
                            gsap.timeline()
                            .to(node.querySelector(".toyPageCover"), {
                                duration: 0.8, 
                                xPercent: 100, 
                                ease: Power3.easeIn,
                            })
                        )
                    }}
                    entry={{
                        delay: 0.8,
                        length: 1.6,
                        trigger: ({node}) => (
                            gsap.timeline()
                            .from(node.querySelector(".workSectionCover"), {
                                xPercent: -100,
                                duration: 0.8, 
                                ease: Power3.easeOut
                            })
                            .to(window, {
                                duration: 0.8, 
                                scrollTo: `#work`,
                                ease: Power3.easeInOut
                            })
                        )
                    }}
                >
                    <span className="ttttt">{`<-`}</span>
                </TransitionLink>
            </div>
        </>
    )
}

export default ToyPage
