import React from "react"
// import Home from "./components/Home";
import HeroNav from "./components/HeroNav";
import Form from "./components/Form"
import Payments from "./components/Payments";
import Cart from "./components/Cart"

function App() {
    return (
        <div className="App">
            <HeroNav />
            <div className="row justify-content-center align-items-center side-padding mt-5 me-0 ms-0">
                <Form />
                <Payments />
                <Cart />
            </div>
        </div>
    );
}

export default App;
