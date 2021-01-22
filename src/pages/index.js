import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const sections = ["home", "about", "work", "contact"]

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
        <Layout sections={sections}>
            <SEO title="Home" />

            {sections.map(sec => (
                <>
                    <div id = {sec} key = {sec} className="section">
                        {sec}<br/>
                    </div>
                {
                    sec !== "contact"
                    &&
                    <div className="section-divider">
                    </div>
                }
                </>
            ))}

            {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
}

export default IndexPage
