import React from 'react'

import C1 from "../../static/images/C1.svg"
import C2 from "../../static/images/C2.svg"
import C3 from "../../static/images/C3.svg"
import C4 from "../../static/images/C4.svg"

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="content">
                    Home Content
                </div>
                <div className="circles">
                    <div className="circle">
                        <img src={C4} alt="C4"/>
                    </div>
                    <div className="circle">
                        <img src={C3} alt="C3"/>
                    </div>
                    <div className="circle">
                        <img src={C2} alt="C2"/>
                    </div>
                    <div className="circle">
                        <img src={C1} alt="C1"/>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
        </>
    )
}

export default Home
