import React from 'react'

const Form = () => {
    return (
        <div className="col-lg-6 col-md-6">
            <h4>Shipping and Payment</h4>
            <div className="login-btn d-flex justify-content-start mt-5">
                <button className="common-button login">LOG IN</button>
                <button className="common-button signup">SIGN UP</button>
            </div>
            <h4 className="mt-5">Shipping Information</h4>
            <div className="row flex-row">
                <div className="col-lg-5">
                    <form className="form--inputs">
                        <input type="email" placeholder='Email' />
                        <input type="text"  placeholder='First Name' />
                        <input type="text"  placeholder='Last Name' />
                        <input type="number" placeholder='Phone Number' />
                    </form>
                </div>
                <div className="col-lg-5">
                    <form className="form--inputs">
                        <input type="text" placeholder='Address' />
                        <input type="text" placeholder='City' />
                        <input type="text"  placeholder='Postal Code / ZIP' />
                        <select name="countries" className="filter-todo">
                            <option value="Poland">Poland</option>
                            <option value="India">India</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
