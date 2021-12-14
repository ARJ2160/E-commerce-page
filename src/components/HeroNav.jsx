import React, { useState } from 'react'
import brand_logo from "../assets/navbar_svg/shopping.svg"
import search from "../assets/navbar_svg/search.svg"
import user from "../assets/navbar_svg/user.svg"

const HeroNav = () => {

    const [navBtn, setNavBtn] = useState(false)

    return (
        <>
            <nav class="navbar">
                <div class="container-fluid">
                    <div className="nav-landing">
                        <a href="/"><img src={brand_logo} className="pe-3" alt="e-commerce brand logo" /></a>
                        <div className="nav--brand--name">
                                <span style={{ color: "gold" }}>
                                    E-
                                </span>
                                <span>
                                    Shop
                                </span>
                        </div>
                    </div>
                    <ul className={navBtn ? "nav-links show" : "nav-links"}>
                        <li><a href="/">Men</a></li>
                        <li><a href="/">Women</a></li>
                        <li><a href="/">Kids</a></li>
                    </ul>
                    <div className={navBtn ? "nav-btn show" : "nav-btn"}>
                        <button><img src={search} alt="" /></button>
                        <button><img src={brand_logo} alt="" /></button>
                        <button><img src={user} alt="" /></button>
                    </div>
                    <button
                        className={navBtn ? "navbar-toggler" : "navbar-toggler collapsed"}
                        onClick={() => setNavBtn(!navBtn)}
                        type="button">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                </div>
            </nav>
            <div className="nav-line d-flex justify-content-between align-items-center" />
        </>
    )
}

export default HeroNav