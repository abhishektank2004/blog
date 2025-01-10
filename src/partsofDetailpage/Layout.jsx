import React from 'react';
import { Outlet } from 'react-router-dom';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import Table4 from './Table4';
import './assets/layout.css';

function Layout() {
  return (
    <div className="layout-container">
      <div className="left-content">
        <Outlet />
      </div>
      <div className="right-content">
        <Table1 />
        <Table2 />
        <Table3 />
        <Table4 />
      </div>
    </div>
  );
}

export default Layout;
