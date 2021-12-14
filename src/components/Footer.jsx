import React from 'react'
import left_arrow from "../assets/left-arrow.svg"
// import logo from "../assets/navbar_svg/shopping.svg"
// import axios from "axios";
require("dotenv").config();
// const Razorpay = require('razorpay')

const Footer = () => {

    // var options = {
    //     "key_id": "rzp_test_OAMlpVxqAeFalg",
    //     "key_secret": "MbQEh9VUM9yiDaT3Ssu3Ej8s",
    //     "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //     "currency": "INR",
    //     "name": "Acme Corp",
    //     "description": "Test Transaction",
    //     "image": "https://example.com/your_logo",
    //     "order_id": "order_IXPO3gaRTabNKF",
    //     "handler": function (response){
    //         alert(response.razorpay_payment_id);
    //         alert(response.razorpay_order_id);
    //         alert(response.razorpay_signature)
    //     },
    //     "prefill": {
    //         "name": "Gaurav Kumar",
    //         "email": "gaurav.kumar@example.com",
    //         "contact": "9999999999"
    //     },
    //     "notes": {
    //         "address": "Razorpay Corporate Office"
    //     },
    //     "theme": {
    //         "color": "#3399cc"
    //     }
    // };
    // var rzp1 = new Razorpay(options);
    // rzp1.on('payment.failed', function (response){
    //         alert(response.error.code);
    //         alert(response.error.description);
    //         alert(response.error.source);
    //         alert(response.error.step);
    //         alert(response.error.reason);
    //         alert(response.error.metadata.order_id);
    //         alert(response.error.metadata.payment_id);
    // });
    // document.getElementById('rzp-button1').onclick = function(e){
    //     rzp1.open();
    //     e.preventDefault();
    // }
    // function loadScript(src) {
    //     return new Promise((resolve) => {
    //       const script = document.createElement('script');
    //       script.src = src;
    //       script.onload = () => {
    //         resolve(true);
    //       };
    //       script.onerror = () => {
    //         resolve(false);
    //       };
    //       document.body.appendChild(script);
    //     });
    //   }
    
    //   async function displayRazorpay() {
    //     const res = await loadScript(
    //       'https://checkout.razorpay.com/v1/checkout.js'
    //     );
    
    //     if (!res) {
    //       alert('Razorpay SDK failed to load. Are you online?');
    //       return;
    //     }
    
    //     const result = await axios.post('/payment/orders');
    
    //     if (!result) {
    //       alert('Server error. Are you online?');
    //       return;
    //     }
    
    //     const { amount, id: order_id, currency } = result.data;
    
    //     const options = {
    //       key: 'l8YINKhW1kva4HbnKAzacOMe', // Enter the Key ID generated from the Dashboard
    //       amount: amount.toString(),
    //       currency: currency,
    //       name: 'ARJS',
    //       description: 'Test Transaction',
    //       image: { logo },
    //       order_id: order_id,
    //       handler: async function (response) {
    //         const data = {
    //           orderCreationId: order_id,
    //           razorpayPaymentId: response.razorpay_payment_id,
    //           razorpayOrderId: response.razorpay_order_id,
    //           razorpaySignature: response.razorpay_signature,
    //         };
    
    //         const result = await axios.post('/payment/success', data);
    
    //         alert(result.data.msg);
    //       },
    //       prefill: {
    //         name: 'ARJS',
    //         email: 'example@example.com',
    //         contact: '9999999999',
    //       },
    //       notes: {
    //         address: 'Example Corporate Office',
    //       },
    //       theme: {
    //         color: '#61dafb',
    //       },
    //     };
    
    //     const paymentObject = new window.Razorpay(options);
    //     paymentObject.open();
    //   }
    
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
                    id="rzp-button1">
                    PROCEED TO PAYMENT
                </button>
            </div>
        </div>
    )
}

export default Footer
