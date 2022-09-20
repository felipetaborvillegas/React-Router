import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogdata } from "./blogdata";
import "../css/BlogPage.css";

export function BlogPage () {
    return (
        <>
            <h1>Three of the best mathematicians</h1>
            <br/>
            <br/> 
            <br/> 

            <Outlet/>

            <ul>
                {blogdata.map(post => (
                    <BlogLink key={post.slug} post={post}/> 
                ))}
            </ul>
        </>
    )
}

function BlogLink ({post}) {
    return (
        <li>
            <Link to={`/mostfamous/${post.slug}`}>{post.title}</Link>
        </li>
    )
}