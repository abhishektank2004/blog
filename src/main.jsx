import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './partsofDetailpage/Layout.jsx';  // Layout for details page
import DetailPage from './detail_page/DetailPage.jsx';  // Detail page component
import First_Page from './LendingPages/First_Page.jsx'; // Landing page component
import LayoutfirstPage from './partFirstPage/LayoutfristPage.jsx'; // Layout for landing page



// Render the app
createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
      <Routes>
        {/* Route for Landing Page Layout */}
        <Route path="/" element={<LayoutfirstPage />}>
        <Route index element={<First_Page />} />
        </Route>

        {/* Route for Details Page Layout */}
        <Route path="/details" element={<Layout />}>
          <Route index element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
