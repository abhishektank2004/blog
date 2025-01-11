import React from "react";

function Teble2() {
  const containerStyle = {
    width: "100%",
    maxWidth: "450px",
    background: "#f8f7fd",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
  };

  const sectionStyle = {
    marginBottom: "30px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  };

  const checkboxGroupStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  };

  const checkboxStyle = {
    marginRight: "12px",
  };

  const labelStyle = {
    fontSize: "16px",
    color: "#333",
  };

  const countStyle = {
    fontSize: "16px",
    color: "#666",
  };

  const priceStyle = {
    fontSize: "16px",
    color: "#333",
    marginTop: "15px",
  };

  const lineContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  };

  const roundedEndStyle = {
    width: "15px",
    height: "15px",
    backgroundColor: "#224872FF",
    borderRadius: "50%",
  };

  const middleLineStyle = {
    flexGrow: 1,
    height: "6px",
    backgroundColor: "#224872FF",
  };

  return (
    <div style={containerStyle}>
      {/* Category Types */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Category Types</h3>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Tours
          </label>
          <span style={countStyle}>98</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Attractions
          </label>
          <span style={countStyle}>89</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Day Trips
          </label>
          <span style={countStyle}>67</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Outdoor Activities
          </label>
          <span style={countStyle}>10</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Concerts & Shows
          </label>
          <span style={countStyle}>45</span>
        </div>
      </div>

      {/* Other */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Other</h3>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Free Cancelation
          </label>
          <span style={countStyle}>45</span>
        </div>
      </div>

      {/* Duration */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Duration</h3>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Up to 1 day
          </label>
          <span style={countStyle}>68</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> 1 to 4 days
          </label>
          <span style={countStyle}>45</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> 4 to 7 days
          </label>
          <span style={countStyle}>90</span>
        </div>
        <div style={checkboxGroupStyle}>
          <label style={labelStyle}>
            <input type="checkbox" style={checkboxStyle} /> Upto 8 days
          </label>
          <span style={countStyle}>12</span>
        </div>
      </div>

      {/* Price */}
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Price</h3>
        <p style={priceStyle}>$0 – $900</p>
        <div style={lineContainerStyle}>
          <div style={roundedEndStyle}></div>
          <div style={middleLineStyle}></div>
          <div style={roundedEndStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Teble2;
