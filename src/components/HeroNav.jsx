import React, { useState } from 'react'
import brand_logo from "../assets/navbar_svg/shopping.svg"
import search from "../assets/navbar_svg/search.svg"
import user from "../assets/navbar_svg/user.svg"

const HeroNav = () => {

    const [navBtn, setNavBtn] = useState(false)

    return (
        <section id="navbar">  
            <nav className="nav--main align-items-center">
                <div className="nav--landing d-flex flex-row align-items-center">
                    <a href="/"><img src={brand_logo} className="pe-3" alt="e-commerce brand logo" /></a>
                    <div className="nav--brand--name flex-row">
                        <h2>
                            <span style={{ color: "gold" }}>E-</span><span>Shop</span>
                        </h2>
                    </div>
                </div>
                <ul className={navBtn ? "nav-links show" : "nav-links"}>
                    <li><a href="/">Men</a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Kids</a></li>
                </ul>
                <div className="nav--social-media">
                    <div className="nav-btn">
                        <button><img src={search} alt="" /></button>
                        <button><img src={brand_logo} alt="" /></button>
                        <button><img src={user} alt="" /></button>
                    </div>
                </div>
                <button
                    className={navBtn ? "navbar-toggler" : "navbar-toggler collapsed"}
                    onClick={() => setNavBtn(!navBtn)}
                    type="button">
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
            </nav>
            <div className="nav-line d-flex justify-content-between align-items-center" />
        </section>
    )
}

export default HeroNav