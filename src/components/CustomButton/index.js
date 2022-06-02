import "./styles.css"
import React from 'react'
import { redirectUrl } from "./../../config/CommonConfig"

function CustomButton({ name }) {

    const redirect = () => {
        const newWindow = window.open(redirectUrl, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className={`btn-custom ${name === "SELL" ? "btn-sell" : "btn-buy"}`}
            onClick={redirect}>{name}</div>
    )
}

export default CustomButton;
