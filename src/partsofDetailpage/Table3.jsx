import React from 'react';

function Table3({ containerWidth = "100%", containerHeight = "auto" }) {
  return (
    <>
      <div
        className='container'
        style={{
          backgroundColor: "#D1CECEFF",
          width: 310 , // Dynamic width
          height: containerHeight, // Dynamic height
          maxWidth: "400px", // Set a max width
          minHeight: "150px", // Set a minimum height
          padding: "10px",
          margin: "10px auto", // Center horizontally
          borderRadius: "8px", // Add rounded corners
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Add a subtle shadow
        }}
      >
        <h5>Subscribe to our Newsletter</h5>
        <p>
        Signup for our newsletter and join 2700+ global business executives and technology experts.
        </p>
        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50", // Primary green color
            color: "white", // White text
            border: "none", // Remove default border
            borderRadius: "4px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            fontSize: "16px", // Increase font size
            fontWeight: "bold", // Bold text
            transition: "background-color 0.3s ease", // Smooth hover effect
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")} // Lighter green on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")} // Reset on hover out
          onFocus={(e) => (e.target.style.boxShadow = "0px 0px 5px #45a049")} // Focus outline
          onBlur={(e) => (e.target.style.boxShadow = "none")} // Remove focus outline
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Table3;
