import * as React from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import BlogLists from "./BlogList";

export default function Home() {



  return (
  <>
  <Navbar />
  <BlogLists />

  </>
  );
}