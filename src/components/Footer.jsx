import React from 'react'
import left_arrow from "../assets/left-arrow.svg"
// import logo from "../assets/navbar_svg/shopping.svg"
import StripeCheckout from "react-stripe-checkout"
import axios from "axios";
require("dotenv").config();

const Footer = () => {
    
    const makePayment = token => {
        const body = {
            token
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        return axios.post("https://localhost:5000/payment", {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="footer mt-2 pe-0 ps-0 d-flex justify-content-between align-items-center">
            <div className="footer--back">
                <button className="common-button footer-back-btn"><img className="pe-3" src={left_arrow} alt="" />Back</button>
            </div>
            <div className="footer--cta--buttons">
                <button className="common-button footer--shopping--button me-3">
                    CONTINUE SHOPPING
                </button>
                <StripeCheckout 
                    stripeKey="pk_test_51K6gQLSFdtUbPFxM0unbRXPsLKxVXbe8TJ47NSGxR6b9Mw0Y0oB9noxLJv9Kha7G18DZjTNcnzvLQScx1IMtvJoG00vlPZe3rO"
                    token={makePayment}
                    name="test"
                    amount={1500}>
                    <button
                        className="common-button footer--payment--button">
                        PROCEED TO PAYMENT
                    </button>
                </StripeCheckout>
            </div>
        </div>
    )
}

export default Footer
