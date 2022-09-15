import * as React from "react";

import axios from "axios";
import "../style/create.css"
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Create() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
  
  };

  return (
  <>
  <Navbar />
  <div className="add-blog-container">
   
    <div className="blog-form" >
    <div className="blog-form-header"><h3>Add a New Blog</h3></div>
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label><br />
            <input type="text" placeholder="Title" onChange={handleChange} required /><br />
            <label>Blog Body</label><br />
            <input type="text" placeholder="Body" onChange={handleChange}  required /><br />
            <label>Author</label><br />
            <select name="" id="" placeholder="Author" onChange={handleChange}>
                <option value="SAURABH">RF</option>
                <option value="SAURABH">RF</option>
                <option value="SAURABH">RF</option>
            </select><br />
           <button onClick={handleSubmit}>Add Blog</button>
        </form>
    </div>
  </div>
  </>
  );
}