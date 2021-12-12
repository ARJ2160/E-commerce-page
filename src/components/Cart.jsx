import React from 'react'
import cart from "../assets/navbar_svg/shopping.svg"
import truck from "../assets/truck.svg"

const Cart = () => {
    return (
        <div className="col-lg-3">
            <div className="cart-logos">
                <img className="logos cart-logo" src={cart} alt="" />
                <div className="logo-line"></div>
                <img className="logos truck-logo" src={truck} alt="" />
            </div>
            <div className="cart-items mt-5">
                <p>Your Cart</p>
            </div>
        </div>
    )
}

export default Cart
