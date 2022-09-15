

import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>
{
return (
    <>
    <nav className="navbar" >
        <div><Link to="">My Blog </Link></div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
    </>
)
}
export default Navbar