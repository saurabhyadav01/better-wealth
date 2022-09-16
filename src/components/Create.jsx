import * as React from "react";

import axios from "axios";
import "../style/create.css"
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Create() {
  const [state, setState] = React.useState({
    title: "",
    body: "",
    authors:""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state)
    axios.post("https://iraitech-assignment-db.herokuapp.com/blogs",state).then((res)=>
    {
        setState({...res.data});
        alert("Blog Added !!")
        navigate("/")
    }).catch((err=>console.log(err)))
  };

  return (
  <>
  <Navbar />
  <div className="add-blog-container">
   
    <div className="blog-form" >
    <div className="blog-form-header"><h3>Add a New Blog</h3></div>
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label><br />
            <input type="text" id="title" placeholder="Title" onChange={handleChange} required /><br />
            <label>Blog Body</label><br />
            <input type="text" id="body" placeholder="Body" onChange={handleChange}  required /><br />
            <label>Author</label><br />
            <select name="" id="authors" placeholder="Author" onChange={handleChange}>
                <option value="Yoshi">yoshi</option>
                <option value="newton">Newton</option>
                
            </select><br />
           <button onClick={handleSubmit}>Add Blog</button>
        </form>
    </div>
  </div>
  </>
  );
}