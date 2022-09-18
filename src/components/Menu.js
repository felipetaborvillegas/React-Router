import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/menu.css";

export function Menu () {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            to={route.to}
                            style={({isActive}) => ({
                                color: isActive ?"red":"blue", 
                            })}
                            end
                        >
                            {route.text}
                        </NavLink>
                    </li>
                ))}
                {/* <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li> */}
                {/* <li>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "red":"blue",
                        })}
                        to="/"
                        end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "red":"blue",
                        })}
                        to="/blog">
                        Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        style={({ isActive }) => ({
                            color: isActive ? "red":"blue",
                        })}
                        to="/profile">
                        Profile
                    </NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

const routes = [];
routes.push({
    to: "/",
    text: "Home"
});
routes.push({
    to: "/mostfamous",
    text: "Most Famous"
});
routes.push({
    to: "/pictures",
    text: "Pictures"
});
