import React from "react";
import mathematicians from "../images/mathematicians.jpg"
import "../css/homePage.css";

export function HomePage () {
    return (
        <div>
            <h1>Greatest Mathematicians</h1>
            <img src={mathematicians} alt="mathematicians"/>
        </div>
    )
}