import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowIcon from "../images/arrow-right-top.svg"; // Adjust the path based on your file structure
import "./CardList.css"; // Import the external CSS file

const CardList = () => {
  const navigate = useNavigate();

  return (
    <div className="card-list-container">
      {/* Card 1 */}
      <div className="card" onClick={() => navigate(`/details`)}>
        <img
          className="card-image"
          src="https://www.1zoom.me/prev/45/44928.jpg"
          alt="Nature"
        />
        <div className="card-content">
          <h3>What Makes Us Closer to Nature</h3>
          <p>Explore the beauty of nature.</p>
        </div>
        <div className="card-icon">
          <img src={ArrowIcon} alt="Arrow" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="card" onClick={() => navigate(`/details`)}>
        <img
          className="card-image"
          src="https://www.1zoom.me/prev/45/44928.jpg"
          alt="Nature"
        />
        <div className="card-content">
          <h3>What Makes Us Closer to Nature</h3>
          <p>Explore the beauty of nature.</p>
        </div>
        <div className="card-icon">
          <img src={ArrowIcon} alt="Arrow" />
        </div>
      </div>
    </div>
  );
};

export default CardList;
