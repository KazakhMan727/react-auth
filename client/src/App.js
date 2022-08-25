import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ToS from "./components/ToS";
import Authorization from "./components/Authorization";
import Registration from "./components/Registration";
import Navbar from "./components/Navbar";

function App () {

    return (
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tos" element={<ToS />} />
                    <Route path="/login" element={<Authorization />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;