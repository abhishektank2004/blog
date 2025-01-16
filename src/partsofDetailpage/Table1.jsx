function Table1({ containerHeight = "auto" }) {
  return (
    <div
      style={{
        backgroundColor: "#3C3131FF", // Dark background
        color: "#ffffff", // White text
        width: "100%",
        maxWidth: "600px",
        height: containerHeight,
        padding: "15px",
        margin: "10px auto",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.1)", // Subtle light shadow
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
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
  );
}

export default Table1;
