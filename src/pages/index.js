import React, { useEffect, useState } from "react"

import SEO from "../components/seo"

import Layout from "../components/layout"
import Home from "../components/sections/home"

const IndexPage = () => {

    useEffect(() => {
        let initHash = document.location.hash
        setTimeout(()=> {
            document
                .querySelector(initHash==="" ? "#home" : initHash)
                .scrollIntoView({ behavior: "smooth", block: "start" })
        }, 0)
    }, [document.location.hash])

    return(
        <Layout>
            <SEO title="Home" />

            <Home />

            

            {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
}

export default IndexPage
