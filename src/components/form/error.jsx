import React from 'react'

function TextError(props) {
    return (
        <div className="formError">
            { props.children }
        </div>
    )
}

export default TextError
