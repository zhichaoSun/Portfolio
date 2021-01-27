import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children, scrollTo }) => {

    return (
        <>
            <Header scrollTo={scrollTo}/>
            <div className="sectionContainer">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
