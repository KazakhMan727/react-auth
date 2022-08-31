import React from "react";
import { Link } from "react-router-dom";

function Authorization () {

    function handleSubmit (e) {
        e.preventDefault();

        fetch('/login', {
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
                    <div className="checkBox"> <input name="remember" type="checkbox" /> <span>Remember me</span> </div>
                    <button type="submit">Log in</button>
                    <div className="logInLink"> <span>No account? </span> <Link to="/register">Sign up!</Link> </div>
                </form>
            </div>
        
    );
}

export default Authorization;