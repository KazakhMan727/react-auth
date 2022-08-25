import React from "react";
import { Link } from "react-router-dom";

function Authorization () {

    return (
            <div className="container additional-styles">
                <form>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <div className="checkBox"> <input type="checkbox" /> <span>Remember me</span> </div>
                    <button type="submit">Log in</button>
                    <div className="logInLink"> <span>No account? </span> <Link to="/register">Sign up!</Link> </div>
                </form>
            </div>
        
    );
}

export default Authorization;