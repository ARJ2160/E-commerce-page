import React from 'react'
import left_arrow from "../assets/left-arrow.svg"

const Footer = () => {
    return (
        <div className="footer mt-2 pe-0 ps-0 d-flex justify-content-between align-items-center">
            <div className="footer--back">
                <button className="common-button footer-back-btn"><img className="pe-3" src={left_arrow} alt="" />Back</button>
            </div>
            <div className="footer--cta--buttons">
                <button className="common-button footer--shopping--button me-3">CONTINUE SHOPPING</button>
                <button className="common-button footer--payment--button">PROCEED TO PAYMENT</button>
            </div>
        </div>
    )
}

export default Footer
