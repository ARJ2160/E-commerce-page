import React from 'react'
import left_arrow from "../assets/left-arrow.svg"
// import logo from "../assets/navbar_svg/shopping.svg"
import axios from "axios";
require("dotenv").config();

const Footer = () => {
    
    async function razorPayPaymentHandler() {
        const API_URL = `http://localhost:5000/razorpay/`
        const orderUrl = `${API_URL}order`;
        const response = await axios.get(orderUrl);
        const { data } = response;
        console.log("App -> razorPayPaymentHandler -> data", data)
        
        const options = {
          key: '',
          name: "avdojo",
          description: "avodojo",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `${API_URL}capture/${paymentId}`;
             const captureResponse = await axios.post(url, {})
             const successObj = JSON.parse(captureResponse.data)
             const captured = successObj.captured;
             console.log("App -> razorPayPaymentHandler -> captured", successObj)
             if(captured){
                 console.log('success')
             }
             
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
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
                <button
                    className="common-button footer--payment--button"
                    onClick={razorPayPaymentHandler}>
                    PROCEED TO PAYMENT
                </button>
            </div>
        </div>
    )
}

export default Footer
