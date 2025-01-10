import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './assets/first_page.css';

function First_Page({ header, description, image }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle card click to navigate to the details page
  const handleCardClick = (cardHeader) => {
    navigate(`/details`); // Navigate to the details page with cardHeader as a parameter
  };

  return (
    <>
      <div className="card-container">
        {/* First Card */}
        <div className="card" onClick={() => handleCardClick(header)}>
          <div className="blue-circle">
            <i className="fas fa-arrow-up-right"></i>
          </div>
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

        {/* Second Card */}
        <div className="card" onClick={() => handleCardClick(header)}>
          <div className="blue-circle">
            <i className="fas fa-arrow-up-right"></i>
          </div>
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

      <div className="card-container">
        {/* First Card */}
        <div className="card" onClick={() => handleCardClick(header)}>
          <div className="blue-circle">
            <i className="fas fa-arrow-up-right"></i>
          </div>
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

        {/* Second Card */}
        <div className="card" onClick={() => handleCardClick(header)}>
          <div className="blue-circle">
            <i className="fas fa-arrow-up-right"></i>
          </div>
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
    </>
  );
}

export default First_Page;
