import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ sections, children }) => {

    return (
        <>
            <Header sections={sections}/>
            <div
                style={{
                    margin: `0 auto`,
                    // maxWidth: 1280,
                    width: 1280,
                    // padding: `0 1.0875rem 1.45rem`,
                    // border: '1px solid white ',
                }}
            >
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
