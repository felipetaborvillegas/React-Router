import React from "react";
import alan from "../images/alan.jpg";
import rama from "../images/Ramanujan.webp";
import euler from "../images/euler.webp";
import "../css/profile.css";

export function ProfilePage () {
    return (
        <div>
            <h1>Pictures</h1>
            <img src={alan} alt="alan"/>
            <img src={rama} alt="rama"/>
            <img src={euler} alt="euler"/>
        </div>
    )
}