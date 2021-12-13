import React from 'react'
import cart from "../assets/navbar_svg/shopping.svg"
import truck from "../assets/truck.svg"
import cart_truck from "../assets/cart_truck.svg"
import products from "../cartItems"

const Cart = () => {
    return (
        <div className="col-lg-3 mb-5">
            <div className="cart-logos d-flex justify-content-between align-items-center">
                <img className="logos cart-logo" src={cart} alt="" />
                <div className="logo-line"></div>
                <img className="logos truck-logo" src={truck} alt="" />
            </div>
            <div className="cart mt-5">
                <h5 className="text-start">Your Cart</h5>
                <div className="cart-items">
                    {products.map(prod => {
                        const { id, image, product_name, price, product_serial_no } = prod
                        return (
                            <div className="item d-flex justify-content-between" key={id}>
                                <div className="d-flex justify-content-between">
                                    <img className="cart--product-image me-3" src={image} alt="shirts" />
                                    <div className="d-flex flex-column">
                                        <h6 className="me-3">{product_name}</h6>
                                        <span style={{ color: "#758283" }}>{product_serial_no}</span>
                                    </div>
                                </div>
                                <div className="cart--price">
                                    <span className="float-end">${price}</span>
                                </div>
                            </div>
                        )}
                    )}
                </div>
                <div className="cart--total d-flex justify-content-between align-items-center mt-5">
                    <span className="lead">Total Cost</span>
                    <span>$986.32</span>
                </div>
                <div className="shipping-details d-flex justify-content-center align-items-center mt-5">
                    <img src={cart_truck} className="me-3" alt="shipping truck" style={{ width: "24px", height: "24px"}}/>
                    <span className="lead">You are $25.76 away from free Shipping!</span>
                </div>
            </div>
        </div>
    )
}

export default Cart
