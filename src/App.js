import React from "react"
// import Home from "./components/Home";
import HeroNav from "./components/HeroNav";
import Form from "./components/Form"
import Payments from "./components/Payments";
import Cart from "./components/Cart"
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <HeroNav />
            <div className="row justify-content-center align-items-center side-padding mt-5 mb-3 me-0 ms-0">
                <Form />
                <Payments />
                <Cart />
                <Footer />
            </div>
        </div>
    );
}

export default App;
