import React from 'react'
import { Field, ErrorMessage } from 'formik'
import error from './error'

function Input(props) {

    const { label, name, ...rest } = props

    return (
        <div className='form-control'>
            <label htmlFor={name} className="formTitle">{label}</label>
            <Field id={name} name={name} {...rest} className="inputField"/>
            <ErrorMessage name={name} component={error}/>
        </div>
    )
}

export default Input
