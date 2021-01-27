import React from 'react'
import Layout from '../components/layout'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { gsap } from "gsap";

const toyPage = () => {
    

    return (
        <>
            <div className="toyPage">
                <AniLink 
                    cover to="/"
                    duration={1.5}
                    direction="left"
                    bg="#ff5722"
                >
                {`<-`}
                </AniLink>
            </div>
        </>
    )
}

export default toyPage
