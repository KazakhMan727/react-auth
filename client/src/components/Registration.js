import React from "react";
import { Link } from "react-router-dom";

function Registration () {

    function handleSubmit (e) {
        e.preventDefault();

        fetch('/register', {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(response => response.json())
        .then(data => alert(data))
    }

    return (
        <div className="container additional-styles">
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input name="repeatedPassword" type="password" placeholder="Repeat password" />
                <div className="checkBox"> <input name="tosAgreement" type="checkbox" /> <Link to="/tos">I agree with ToS</Link> </div>
                <button type="submit">Sign up</button>
                <div className="logInLink"> <span>Have an account? </span> <Link to="/login">Log in!</Link> </div>
            </form>
        </div>
    );
}

export default Registration;