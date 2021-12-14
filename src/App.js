import React from "react"
// import Home from "./components/Home";
import HeroNav from "./components/HeroNav";
import Form from "./components/Form"
import Payments from "./components/Payments";
import Cart from "./components/Cart"
import Footer from "./components/Footer";
// import HoverMenu from "./components/HoverMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { userName } from "./redux/signUpSlice";


function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <div className="App">
                        <HeroNav />
                        <div className="row justify-content-center align-items-center side-padding mt-5 mb-3 me-0 ms-0">
                            <Form />
                            <Payments />
                            <Cart />
                            <Footer />
                            {/* <HoverMenu /> */}
                        </div>
                    </div>
                } />
                <Route exact path="/login" element={
                    <div>
                        <HeroNav />
                        <SignIn />
                    </div>
                } />
                <Route exact path="/signup" element={
                    <div>
                        <HeroNav />
                        
                        <SignUp />
                    </div>
                } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
