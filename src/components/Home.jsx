import * as React from "react";

import axios from "axios";
import "../style/Home.css"
import { useNavigate } from "react-router-dom";

export default function Home() {
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
  <div className="add-blog-container">
    <div className="blog-form" >
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label><br />
            <input type="text" placeholder="title" onChange={handleChange} required /><br />
            <label>Blog Body</label><br />
            <input type="text" placeholder="title" onChange={handleChange}  required /><br />
            <label>Author</label><br />
            <select name="" id="" onChange={handleChange}>
                <option value="SAURABH">RF</option>
                <option value="SAURABH">RF</option>
                <option value="SAURABH">RF</option>
            </select>
           <input type="submit" value={"Add Blog"} />
        </form>
    </div>
  </div>
  </>
  );
}