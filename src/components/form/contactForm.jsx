import React, { useState, useEffect } from 'react'

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

// 6LdOFDoaAAAAAHauxjT6xQubq5DGwdw1n9jO5PU6

function ContactForm() {

    const [serverState, setServerState] = useState({
        submitted: false,
        ok: false,
        msg: ""
    });

    const handleServerResponse = (submitted, ok, msg) => {
        setServerState({...serverState, submitted, ok, msg});
    };

    const handleOnSubmit = (values, actions) => {
        axios({
            method: "POST",
            url: "https://formspree.io/f/mwkwywko",
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
                        <FormikControl control='input' type='text' label='How do I address you?' name='name' />
                        <FormikControl control='input' type='email' label='Your Email' name='email' />
                        <FormikControl control='textarea' label='Feel free to leave a message' name='message' />
                        <button 
                            type='submit' disabled={!formik.isValid} 
                            className={(formik.isValid && !serverState.ok) ? "submitBtnEnabled" : "submitBtnDisabled"}
                        >Submit</button>
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
