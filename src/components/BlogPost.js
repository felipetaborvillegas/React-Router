import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogdata";
import "../css/blogPost.css";

export function BlogPost () {
    const navigate = useNavigate();
    const { slug } = useParams();

    const blogpost = blogdata.find(post => post.slug === slug);

    const returnToBlog = () => {
        navigate("/mostfamous")
    }

    return (
        <div>
            <h2>{blogpost.title}</h2>
            <p>{blogpost.content}</p>
            <p>Died: {blogpost.died}</p>
            <button onClick={returnToBlog}>Return</button>
        </div>
    )
}

