import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,  useParams } from "react-router-dom";
import "../style/blogdetails.css"
import Navbar from "./Navbar";

function BlogDetails()
{
  const navigate=useNavigate()
    const [blogData,setBlogData]=useState(
       {
        title:"",
        body:"",
        author:""
       }

    )
    const {id}=useParams()
    const handleDelete=()=>
    {
        axios.put(`https://iraitech-assignment-db.herokuapp.com/blogs/${id}`).then((res)=>
        {
           
            alert("Blog Deleted!!")
            navigate("/")
        }).catch((err=>console.log(err)))
        
    
    }
    const fetchData=()=>
    {
    axios.get(`https://iraitech-assignment-db.herokuapp.com/blogs/${id}`).then((res)=>
    {
        setBlogData({...res.data});
        console.log(res.data)
    }).catch((err=>console.log(err)))
    }

    useEffect(()=>
    {
fetchData()
    },[])
    return (
        <>
        <Navbar />
        <div className="blog-list-container">
            <h2>Blog Details</h2>
              {
                blogData.length ?<div className="blog-box">
                <h2>{blogData.title}</h2>
                <h5>{blogData.body}</h5>
                <h6>{blogData.authors}</h6>
                </div>:"Loading..."
              }
           <button onClick={handleDelete}>Delete</button>
        </div>
        </>
    )
}

export default BlogDetails;