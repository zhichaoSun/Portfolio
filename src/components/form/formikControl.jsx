import React from 'react'

import Input from './input'
import Textarea from './textarea'

function FormikControl(porps) {

    const {control, ...rest} = porps

    switch(control) {
        case 'input': 
            return <Input {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        default: return null
    }
}

export default FormikControl
