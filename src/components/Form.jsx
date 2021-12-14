import React from 'react'

const Form = () => {

    return (
        <div className="form col-lg-5 col-md-6 mb-5 ps-0 pe-0">
            <h4>Shipping and Payment</h4>
            <div className="login-btn d-flex justify-content-start mt-5">
                <a href="/login">
                    <button className="common-button login">
                        LOG IN
                    </button>
                </a>
                <a href="/signup">
                    <button className="common-button signup">    
                        SIGN UP
                    </button>
                </a>
            </div>
            <h4 className="mt-5">Shipping Information</h4>
            <div className="row justify-content-start">
                <form className="form--inputs">
                    <input type="email" placeholder='Email' />
                    <input type="text"  placeholder='First Name' />
                    <input type="text"  placeholder='Last Name' />
                    <input type="text" placeholder='Phone Number' />
                </form>
                <form className="form--inputs">
                    <input type="text" placeholder='Address' />
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='Postal Code / ZIP' />
                    <div className="form--select">
                        <select name="countries" className="countries">
                            <option value="Poland">Poland</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )

    
}

export default Form
