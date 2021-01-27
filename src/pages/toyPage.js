import React from 'react'
import Layout from '../components/layout'
import TransitionLink from "gatsby-plugin-transition-link";

import { gsap } from "gsap";

const toyPage = () => {
    

    return (
        <>
            <div className="toyPage">
                <TransitionLink 
                    to="/"
                    exit={{length: 1}}
                    entry={{delay: 1}}
                >
                {`<-`}
                </TransitionLink>
            </div>
        </>
    )
}

export default toyPage
