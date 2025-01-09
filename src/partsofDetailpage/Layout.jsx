import React from 'react';
import { Outlet } from 'react-router-dom'; // For dynamic routing
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import './assets/layout.css'; // Ensure this file exists and contains necessary styles

function Layout() {
  return (
    <div className="layout-container">
      <div className="middle-content-container">
        {/* Dynamic Data rendered here using Outlet */}
        <Outlet />
      </div>

      <div className="right-side-container">
        <Table1 />
        <Table2 />
        <Table3 />
        <Table4 />
      </div>
    </div>
  );
}

export default Layout;
