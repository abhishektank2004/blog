import React from 'react';
import { Outlet } from 'react-router-dom';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import './assets/layout.css';

function Layout() {
  return (
    <>
      {/* Full-sized image with centered text overlay */}
      <div className="full-size-image-container">
        <img
          src="https://dreamypixel.com/wp-content/uploads/2016/01/sunrise-in-the-hills.jpg"
          alt="Full Size Content"
          className="full-size-image"
        />
        <div className="text-overlay">
          <h1>Blog</h1>
          <p className="home-blog">Home / Blog</p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="layout-container">
        {/* Left Content */}
        <div className="left-content">
          <Outlet />
        </div>

        {/* Right Content - Tables */}
        <div className="right-content">
          <Table1 />
          <Table2 />
          <Table3 />
          <Table4 />
        </div>
      </div>
    </>
  );
}

export default Layout;