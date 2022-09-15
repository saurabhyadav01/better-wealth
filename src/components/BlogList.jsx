import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/bloglist.css"

function BlogLists()
{

    const [blogData,setBlogData]=useState([

    ])

    const fetchData=()=>
    {
    axios.get("http://localhost:5000/blogs").then((res)=>
    {
        setBlogData([...res.data])
    }).catch((err=>console.log(err)))
    }

    useEffect(()=>
    {
fetchData()
    },[])
    return (
        <>
        <div className="blog-list-container">
            <h2>All Blogs</h2>
           <Link style={{textDecoration:"none",color:"black"}} to="/blogdetails">
           {
            blogData.map((e)=>(
                
             <div className="blog-box" key={e._id}>
             <h2>{e.title}</h2>
             <h5>{e.author}</h5>
             </div>
            ))
            }
           </Link>
        </div>
        </>
    )
}
export default BlogLists