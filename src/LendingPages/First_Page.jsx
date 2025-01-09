import React from 'react';
import './assets/first_page.css';

function First_Page({ header, description, image }) {
  return (
    <>
    <div className="card-container">
      {/* First Card */}
      <div className="card">
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
      <div className="card">
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
      <div className="card">
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
      <div className="card">
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
