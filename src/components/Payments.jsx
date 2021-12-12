import React from 'react'
import paypal from "../assets/Paypal.webp"
import visa from "../assets/visa.webp"
import mastercard from "../assets/Mastercard.webp"
import discover from "../assets/Discover.webp"
import dpd from "../assets/DPD.webp"

const Payments = () => {
    return (
        <div className="col-lg-4 col-md-6">
            <h4 className="text-center">Payment Method</h4>
            <div className="cards-grid">
                <div className="cards d-flex justify-content-center">
                    <div>
                        <button className="common-button">
                            <img src={paypal} alt="" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={visa} alt="" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={mastercard} alt="" />
                        </button>
                    </div>
                </div>
                <div className="cards d-flex justify-content-center">
                <div>
                        <button>
                            <img src={discover} alt="" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={dpd} alt="" />
                        </button>
                    </div>
                    <div>
                        <button>
                            <img src={mastercard} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
