import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/blogdetails.css"
import Navbar from "./Navbar";

function BlogDetails()
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
        <Navbar />
        <div className="blog-list-container">
            <h2>Blog Details</h2>
 
           
             <div className="blog-box">
             <h2>Introduction to useState Hook</h2>
             <h5>Written by yoshi</h5>
             </div>
            
         
           <button>Delete</button>
        </div>
        </>
    )
}

export default BlogDetails;