import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assets/first_page.css';
import errow from '../images/errow.webp'; // Arrow image for the circle

function First_Page({ header, description, image }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle card click to navigate to the details page
  const handleCardClick = () => {
    navigate(`/details`); // Navigate to the details page
  };

  return (
    <>
      <div className="card-container">
        {/* First Card */}
        <div className="card" onClick={handleCardClick}>
          <div className="blue-circle">
            <img src={errow} alt="Arrow" />
          </div>
          <div className="card-img-container">
            <img
              src={
                image ||
                "https://images.pexels.com/photos/266617/pexels-photo-266617.jpeg?cs=srgb&dl=pexels-pixabay-266617.jpg&fm=jpg"
              }
              alt={header}
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-header">{header || "Default Header"}</h2>
              <p className="card-description">
                {description || "Default Description"}
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="card" onClick={handleCardClick}>
          <div className="blue-circle">
            <img src={errow} alt="Arrow" />
          </div>
          <div className="card-img-container">
            <img
              src={
                image ||
                "https://images.pexels.com/photos/266617/pexels-photo-266617.jpeg?cs=srgb&dl=pexels-pixabay-266617.jpg&fm=jpg"
              }
              alt={header}
              className="card-img"
            />
            <div className="card-content">
              <h2 className="card-header">{header || "Default Header"}</h2>
              <p className="card-description">
                {description || "Default Description"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default First_Page;
