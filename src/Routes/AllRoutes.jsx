import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Create from "../components/Create";
import BlogDetails from "../components/BlogDetails";
import NotFound from "../components/NotFound";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />
        <Route path="/404" component={<NotFound />} />
        
      </Routes>
    </>
  );
};
export default AllRoutes;
