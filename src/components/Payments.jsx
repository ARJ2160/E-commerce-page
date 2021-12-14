import React from 'react'

const Payments = () => {
    
    return (
        <div className="payments col-lg-4 col-md-6 mb-5 ps-0 pe-0">
            <div className="payment-cards">
                <h4 className="text-start">Payment Method</h4>  
                <div className="cards-grid">
                    <div className="cards payment-btns d-flex justify-content-start">
                        <button className="background paypal" />
                        <button className="background visa" />
                        <button className="background mastercard" />
                    </div>   
                    <div className="cards payment-btns d-flex justify-content-start">
                        <button className="background maestrocard" />
                        <button className="background amazon" />
                        <button className="background fedex" />
                    </div>
                </div>
            </div>
            <div className="delivery mt-5">
                <h4 className="text-start mb-2">Delivery Method</h4> 
                <div className="services-grid">
                    <div className="deliveries delivery-btns d-flex justify-content-start">
                        <button className="background truck" />
                        <button className="background visa" />
                    </div>   
                    <div className="deliveries delivery-btns d-flex justify-content-start">
                        <button className="background maestrocard" />
                        <button className="background amazon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payments
