

import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"
const Navbar=()=>
{
return (
    <>
    
    <nav className="navbar" >
        <div><Link style={{textDecoration:"none",color:"#f1356d",fontWeight:"bold"}} to="/">The Dogo Blogs</Link></div>
        <div >
            <Link style={{textDecoration:"none",marginLeft:"20px",fontWeight:"100"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",marginLeft:"20px"}} to="/create">New Blog</Link>
        </div>
       
    </nav>
    <hr />
    </>
)
}
export default Navbar