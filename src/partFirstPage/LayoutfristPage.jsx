import React from "react";
import Teble1 from "./Table1.jsx";
import { Outlet } from "react-router-dom";
import "./assets/layoutfirst.css"; // Importing the CSS for styling
import Teble2 from "./Table2.jsx";

const LayoutfirstPage = () => {
  return (
    <>
      {/* Full-sized image with centered "Blog" text */}
      <div className="full-size-image-container">
        <img
          src="https://dreamypixel.com/wp-content/uploads/2016/01/sunrise-in-the-hills.jpg" // Replace with your image URL
          alt="Full Size Content"
          className="full-size-image"
        />
        <div className="text-overlay">
          <h1>Blog</h1> {/* "Blog" text centered on the image */}
          <p className="home-blog">Home / Blog</p> {/* "Home / Blog" text below "Blog" */}
        </div>
      </div>

      {/* Main layout */}
      <div className="layout-container">
        {/* Left Side - Two Tables */}
        <div className="left-side-container">
          <Teble1 />
          <Teble2 />
        </div>

        {/* Middle Content */}
        <div className="middle-content-container">
          <Outlet />
        </div>

        {/* Right Side - Blank */}
        <div className="right-side-container"></div>
      </div>
    </>
  );
};

export default LayoutfirstPage;
