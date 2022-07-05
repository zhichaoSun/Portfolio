import React, { useState } from 'react'

import { Formik, Form } from "formik";
import * as yup from "yup"
import axios from "axios";

import FormikControl from './formikControl';


const initialValues = {
    name: "",
    email: "",
    message: ""
}

const validationSchema = yup.object().shape({
    name:  yup.string()
        .required("Required."),
    email: yup.string()
        .email("Invalid email.")
        .required("Required."),
    message: yup.string()
        .required("Required.")
})

function ContactForm() {

    const [serverState, setServerState] = useState({
        submitted: false,
        ok: false,
        msg: ""
    });

    const handleServerResponse = (submitted, ok, msg) => {
        setServerState({...serverState, submitted, ok, msg});
    };

    console.log(process.env.GATSBY_FORMSPREE_URL)

    const handleOnSubmit = (values, actions) => {
        axios({
            method: "POST",
            url: process.env.FORMSPREE_URL,
            data: values
        })
        .then(response => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleServerResponse(true, true, "Thank you for leaving me a message! Have a good day.");
        })
        .catch(error => {
            actions.setSubmitting(false);
            handleServerResponse(true, false, "Seems something went wrong with the server.");
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
        >
        {
            formik => {
                return (
                    <Form>
                        <div className="mask"><FormikControl control='input' type='text' label='How do I address you?' name='name' /></div>
                        <div className="mask"><FormikControl control='input' type='email' label='Your Email' name='email' /></div>
                        <div className="mask"><FormikControl control='textarea' label='Feel free to leave a message' name='message' /></div>
                        
                        <div className="mask">
                            <button 
                                type='submit'
                                disabled={!formik.isValid} 
                                className={`formComponent`}
                                style={{color: `${(formik.isValid && !serverState.ok) ? "#ff5722" : "#2b2b2b"}`}}
                            >Submit</button> 
                        </div>
                        
                        {
                            serverState.submitted
                            &&
                            <p className={!serverState.ok ? "submitFailed" : "submitSuccess"}>
                                {serverState.msg}
                            </p>
                        }
                    </Form>
                )
            }
        }
        </Formik>
    )
}

export default ContactForm
