import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/bloglist.css"

function BlogLists()
{

    const [blogData,setBlogData]=useState(
    []
    )

    const fetchData=()=>
    {
    axios.get("https://iraitech-assignment-db.herokuapp.com/blogs").then((res)=>
    {
        console.log(res.data)
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
         
           {
            blogData.length ? blogData.map((e)=>(
                
             <Link style={{textDecoration:"none",color:"black"}} to={`/blogdetails/${e._id}`}>
             <div className="blog-box" key={e._id}>
             <h2>{e.title}</h2>
             <h5>{e.authors}</h5>
             </div>
             </Link>
            )) :"Loading..."
            
            }
          
        </div>
        </>
    )
}
export default BlogLists