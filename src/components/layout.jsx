import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"

const Layout = ({ children, activeSection, setActiveSection }) => {

    return (
        <>
            <Header activeSection={activeSection} setActiveSection={setActiveSection}/>
            <div className="sectionContainer">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
