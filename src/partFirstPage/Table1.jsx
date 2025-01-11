import React, { useState } from 'react';

function Teble1() {
  const containerStyle = {
    width: "100%",
    maxWidth: "450px",
    background: "#f8f7fd",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const formGroupStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    background: "transparent",
    marginLeft: "10px",
    color: "#666",
  };

  const iconStyle = {
    fontSize: "18px",
    color: "#666",
  };

  const buttonStyle = {
    background: "#3b49df",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Search Tour</h2>
      <form style={formStyle}>
        {/* Location dropdown */}
        <div style={formGroupStyle}>
          <span style={iconStyle}>📍</span>
          <select style={inputStyle}>
            <option value="">Location?</option>
          </select>
        </div>

        {/* Booking type dropdown */}
        <div style={formGroupStyle}>
          <span style={iconStyle}>🎟️</span>
          <select style={inputStyle}>
            <option value="">Booking types</option>
          </select>
        </div>

        {/* Date picker */}
        <div style={formGroupStyle}>
          <span style={iconStyle}>📅</span>
          <input type="date" style={inputStyle} placeholder="Date from" />
        </div>

        {/* Number of persons input */}
        <div style={formGroupStyle}>
          <span style={iconStyle}>👤</span>
          <input
            type="number"
            style={inputStyle}
            placeholder="No of Persons"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = "#2f3dbd")}
          onMouseOut={(e) => (e.target.style.background = "#3b49df")}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Teble1;
