import React from "react";
import { NavLink } from "react-router-dom";

function Navbar () {

    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Authorize</NavLink>
            <NavLink to="/register">Sign up</NavLink>
        </nav>
    );
}

export default Navbar;