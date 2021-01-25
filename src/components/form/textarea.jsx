import React from 'react'
import error from './error'
import { Field, ErrorMessage } from 'formik'

function Textarea(props) {

    const { label, name, ...rest} = props

    return (
        <div className='form-control formComponent'>
            <label htmlFor={name} className="formTitle">{label}</label>
            <Field as='textarea' id={name} name={name} {...rest} className="inputTextArea"/>
            <ErrorMessage name={name} component={error} />
        </div>
    )
}

export default Textarea
