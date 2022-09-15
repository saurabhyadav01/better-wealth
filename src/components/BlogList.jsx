import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/bloglist.css"

function BlogLists()
{

    const [blogData,setBlogData]=useState([

    ])

    const fetchData=()=>
    {
    axios.get("").then((res)=>
    {
        console.log(res.data)
    }).catch((err=>console.log(err)))
    }
    return (
        <>
        <div className="blog-list-container">
            <h2>All Blogs</h2>
           <Link style={{textDecoration:"none",color:"black"}} to="/blogdetails">
           {
             <div className="blog-box">
             <h2>Introduction to useState Hook</h2>
             <h5>Written by yoshi</h5>
             </div>
            }
           </Link>
        </div>
        </>
    )
}
export default BlogLists