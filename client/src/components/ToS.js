import React from "react";
import { useNavigate } from "react-router-dom";

function ToS () {

    let navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/register")}>Okie dokie</button>
        </div>
    );
}

export default ToS;