import React from 'react';

function Table1({ containerHeight = "auto" }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#EDEDED", // Light background
          width: "100%", // Full container width on phone screen
          maxWidth: "600px", // Optional: Limit max width for large screens
          height: containerHeight, // Dynamic height
          padding: "15px", // Inner spacing
          margin: "10px auto", // Center the container horizontally
          borderRadius: "8px", // Rounded corners
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          overflowY: "auto", // Enable vertical scrolling if content overflows
          boxSizing: "border-box", // Ensure padding is included in height
        }}>
        <h5>Table of Content</h5>
        <ul>
          <li>What is Azure Cost Optimization?</li>
          <li>Importance of Optimizing Azure Costs</li>
          <li>Azure Cost Optimization Techniques</li>
          <li>Azure Cost Optimization Tools</li>
          <li>Factors Affecting Azure Cost Optimization</li>
          <li>Conclusion</li>
        </ul>
      </div>
    </>
  );
}

export default Table1;
