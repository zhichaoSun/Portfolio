import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

    const sections = ["home", "about", "work", "contact"]

    useEffect(() => {
        let initHash = document.location.hash
        setTimeout(()=> {
            document
                .querySelector(initHash===""?"#home":initHash)
                .scrollIntoView({ behavior: "smooth", block: "start" })
        }, 0)
    }, [])

    return(
        <Layout sections={sections}>
            <SEO title="Home" />

            {sections.map(sec=>(
                <div
                    id={sec}
                    key={sec}
                    style={{
                        color: "white",
                        display: "grid",
                        placeItems: "center",
                        height: "100vh",
                        borderBottom: "1px solid white",
                        fontSize: "3rem",
                        fontWeight: 800,
                    }}
                >
                    #{sec}
                </div>
            ))}

            {/* <Link to="/page-2/">Go to page 2</Link> */}
        </Layout>
    )
}

export default IndexPage
