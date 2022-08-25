import React from "react";

function Registration () {

    return (
        <div className="container">
            <form>
                <input placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Repeat password" />
                <div className="checkBox"> <input type="checkbox" /> <span>Remember me</span> </div>
                <button>Sign up</button>
                <div className="logInLink"> <span>Have an acoount? </span> <a href="localhost:3000">Log in!</a> </div>
            </form>
        </div>
    );
}

export default Registration;