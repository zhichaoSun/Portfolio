import React from 'react'

import { Formik, Form } from "formik";
import * as yup from "yup"

import { TextField, Button } from "@material-ui/core";

const Contact = () => {
    return (
        <>
            <div className="divider" id="contact"></div>
            <section className="contact">
                <div className="contact-grid-container">
                    <div className="contactL">
                        <div className="rectL"></div>
                        <div className="circleL"></div>
                    </div>

                    <div className="contactForm">
                        <div className="title">
                            <h1>Contact <span>Me</span></h1>
                        </div>
                        <div className="form">
                            123
                        </div>
                    </div>

                    <div className="contactR">
                        <div className="circleR"></div>
                        <div className="rectR"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
