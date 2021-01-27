import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby";

import { gsap } from "gsap";

const toyPage = () => {
    

    return (
        <>
            <div
                style={{
                    width: "100vw", height: "100vh",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    color: "#f7f7f7", fontFamily: "Poppins", fontSize: "4rem", fontWeight: "800"
                }}
            >
                <Link to="/" style={{textDecoration: "none", color: "#f7f7f7"}}>{`<-`}</Link>
            </div>
        </>
    )
}

export default toyPage
