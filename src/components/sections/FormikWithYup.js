import React, { useState } from 'react'

import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
        root:           { maxWidth: '450px', display: "block" },
        container:      { display: 'flex', flexDirection: "column" ,justifyContent: 'center', alignItems: 'center'},
        textField:      { width: '40%', margin: '10px' },
        submitButton:   { marginTop: "25px" },
        title:          { textAlign: 'center' },
        successMsg:     { color: 'teal' },
        errorMsg:       {color: 'salmon'},
})

const formStatusProps = {
    sucess:     { message: '✅', type: 'success' },
    duplicate:  { message: '🈁', type: 'error' },
    error:      { message: '❌', type: 'error' }
}

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const validationSchema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter a valid emial').required('Please enter your email'),
    password: yup.string().required('Please set a password'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Password must match').required('Please confirm your password'),
})

const onSubmit = async(values) => {
    alert(JSON.stringify(values))
    // setTimeout(() => {
    //     actions.setSubmitting(false)
    // }, 1000);
}


function FormikWithYup() {

    const classes = useStyle()

    const [displayFormStatus, setDisplayFormStatus] = useState(false)
    const [formStatus, setFormStatus] = useState({
        message: '',
        type: '',
    })

    const createNewUser = async (data, restForm) => {
        try {
            // call api here
            if(data) {
                setFormStatus(formStatusProps.sucess)
                restForm({})
            }
        } catch(err) {
            const response = err.response
            if(response.data === 'user already exist' && response.status === 400) {
                setFormStatus(formStatusProps.duplicate)
            } else {
                setFormStatus(formStatusProps.error)
            }
        } finally {
            setDisplayFormStatus(true)
        }
    }

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >
            {
                formik => {
                
                    const { values, errors, touched, handleBlur, handleChange, isSubmitting } = formik

                    console.log(formik)

                    return(
                        <React.Fragment>
                            <h1 className={classes.title}>Sign Up</h1>
                            <Form className={classes.container}>
                                <TextField type='text' variant='outlined' id='name' name='name' label='name'
                                className={classes.textField}
                                value={values.name}
                                helperText={
                                    errors.name && touched.name
                                        ? errors.name
                                        : 'Enter your name'
                                }
                                error={
                                    errors.name && touched.name 
                                        ? true
                                        : false
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <TextField type='email' variant='outlined' id='email' name='email' label='email'
                                className={classes.textField}
                                value={values.email}
                                helperText={
                                    errors.email && touched.email
                                    ? errors.email
                                    : "Enter your email"
                                }
                                error={
                                    errors.email && touched.email 
                                        ? true
                                        : false
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <TextField type='password' variant='outlined' id='password' name='password' label='password'
                                className={classes.textField}
                                helperText={
                                    errors.password && touched.password
                                    ? errors.password
                                    : "Enter your password"
                                }
                                error={
                                    errors.password && touched.password 
                                        ? true
                                        : false
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <TextField type='password' variant='outlined' id='confirmPassword' name='confirmPassword' label='confirmPassword'
                                className={classes.textField}
                                helperText={
                                    errors.confirmPassword && touched.confirmPassword
                                    ? errors.confirmPassword
                                    : "Enter your confirmPassword"
                                }
                                error={
                                    errors.confirmPassword && touched.confirmPassword 
                                        ? true
                                        : false
                                }
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <Button type='submit' variant='contained' color='secondary'disabled={isSubmitting}>
                                    submit
                                </Button>
                            </Form>
                        </React.Fragment>
                    )
                }
            }
        </Formik>
    )
}

export default FormikWithYup
