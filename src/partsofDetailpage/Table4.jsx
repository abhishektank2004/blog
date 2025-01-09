import React from 'react';

function Table4({ containerWidth = "100%", containerHeight = "auto" }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F5F5F5", // Light background for better contrast
          width: 310, // Dynamic width
          height: containerHeight, // Dynamic height
          maxWidth: "400px", // Max width for responsiveness
          minHeight: "200px", // Minimum height to ensure usability
          padding: "20px", // Inner spacing
          margin: "10px auto", // Center the container horizontally
          borderRadius: "8px", // Rounded corners
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        }}
      >
        <h5 style={{ marginBottom: "10px", textAlign: "center" }}>
          User Information
        </h5>
        <h6 style={{ marginBottom: "15px", textAlign: "center" }}>
          Please fill out the form
        </h6>

        <input
          type="text"
          placeholder="Name"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
          }}
        />
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
        <textarea
          placeholder="Description"
          rows="3"
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
            backgroundColor: "orange", // Normal color
            color: "white", // White text
            border: "none", // Remove default border
            borderRadius: "4px", // Rounded corners
            cursor: "pointer", // Pointer cursor on hover
            fontSize: "16px", // Font size
            fontWeight: "bold", // Bold text
            transition: "background-color 0.3s ease", // Smooth hover effect
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "blue")} // Change to blue on hover
          onMouseLeave={(e) => (e.target.style.backgroundColor = "orange")} // Reset to orange
          onFocus={(e) => (e.target.style.boxShadow = "0px 0px 5px blue")} // Focus outline
          onBlur={(e) => (e.target.style.boxShadow = "none")} // Remove focus outline
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Table4;
