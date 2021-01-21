import React from 'react'

function Footer() {
    return (
        <footer
            style={{
                marginTop: `2rem`,
                border: `1px solid black`,
                textAlign: `center`
            }}
        >
            © {new Date().getFullYear()}
        </footer>
    )
}

export default Footer
