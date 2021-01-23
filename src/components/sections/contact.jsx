import React from 'react'

import { Formik, Form } from "formik";
import * as yup from "yup"

import { TextField, Button } from "@material-ui/core";

import C1 from "../../static/images/C1.svg"
import C3 from "../../static/images/C3.svg"
import R2 from "../../static/images/R2.svg"
import R4 from "../../static/images/R4.svg"

const Contact = () => {
    return (
        <>
            <div className="divider" id="contact"></div>
            <section id="contact">
                <div className="contact-grid-container">
                    <div className="contactL">
                        <div className="circle">
                            <img src={C3} alt="C3"/>
                        </div>
                        <div className="rect">
                            <img src={R2} alt="R2"/>
                        </div>
                    </div>

                    <div className="contactForm">
                        <div className="from">
                            <h1>Contact <span>Me</span></h1>
                        </div>
                    </div>

                    <div className="contactR">
                        <div className="rect">
                            <img src={R4} alt="R4"/>
                        </div>
                        <div className="circle">
                            <img src={C1} alt="C1"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
