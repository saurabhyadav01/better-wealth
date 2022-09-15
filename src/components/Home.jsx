import * as React from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BlogLists from "./BlogList";

export default function Home() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });


  return (
  <>
  <Navbar />
  <BlogLists />

  </>
  );
}