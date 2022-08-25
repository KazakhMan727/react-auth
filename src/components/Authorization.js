import React from "react";

function Authorization () {

    return (
        <div className="container">
            <form>
                <input placeholder="Username" />
                <input type="password" placeholder="Password" />
                <div className="checkBox"> <input type="checkbox" /> <span>Remember me</span> </div>
                <button>Log in</button>
                <div className="logInLink"> <span>No account? </span> <a href="localhost:3000">Sign up!</a> </div>
            </form>
        </div>
    );
}

export default Authorization;