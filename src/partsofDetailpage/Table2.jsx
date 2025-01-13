import React from 'react';

function Table2({ containerHeight = "150px" }) {
  return (
    <>
      <div
        className='container'
        style={{
          backgroundColor: "#D1CECEFF", // Light background color
          width: "100%", // Full container width for mobile
          maxWidth: "600px", // Max width for larger screens
          height: containerHeight, // Dynamic height
          padding: "10px", // Inner spacing
          margin: "10px auto", // Center horizontally
          borderRadius: "8px", // Rounded corners
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
          overflowY: "auto", // Enable vertical scrolling for overflow
          boxSizing: "border-box", // Include padding in height
        }}>
        <p>Related Service</p>
        <h5>Cloud and DevOps</h5>
        <p>Cloud and DevOps is a service that helps you manage and.</p>
      </div>
    </>
  );
}

export default Table2;
