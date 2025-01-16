import React from 'react';
import { useNavigate } from 'react-router-dom';

function First_Page() {
  const navigate = useNavigate();

  const handleCardClick = (cardId) => {
    navigate(`/details`);
  };

  return (
    <div style={styles.container} className="cards-container">
      {[1, 2, 3, 4].map((cardId) => (
        <div
          key={cardId}
          onClick={() => handleCardClick(cardId)}
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          <img
            src="https://www.1zoom.me/prev/45/44928.jpg"
            alt="Nature"
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.title}>What Makes Us Closer to Nature</h3>
            <p style={styles.description}>Explore the beauty of nature.</p>
          </div>
          <div style={styles.iconContainer}>
            <img
              src="https://img.icons8.com/ios11/512w/FFFFFF/right.png"
              alt="Arrow"
              style={styles.icon}
            />
          </div>
        </div>
      ))}
      <style>
        {`
          /* Responsive Styles */
          @media (max-width: 768px) {
            .cards-container {
              grid-template-columns: 1fr !important; /* Single column layout */
              padding: 10px !important; /* Reduce padding for smaller screens */
            }
            .cards-container .card {
              width: 100% !important; /* Card width to take full container width */
              margin: 0 0 20px 0 !important; /* Reduce horizontal margins */
            }
          }

          @media (max-width: 430px) {
            .cards-container {
              grid-template-columns: 1fr !important; /* Single column layout */
              padding: 10px !important; /* Padding adjustments */
            }
            .cards-container .card {
              width: 100% !important; /* Full width cards for small phones */
              margin: 10 10 15px 10 !important; /* Adjust bottom margin */
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gap: '20px',
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px',
    gridTemplateColumns: 'repeat(2, 1fr)', // Display 2 cards per row by default
    backgroundColor: '#000000', // Black background
  },
  card: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)', // White shadow
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    backgroundColor: '#1a1a1a', // Dark gray card background
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.5)', // Darker image for better text visibility
  },
  textContainer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    color: 'white',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'left',
  },
  title: {
    margin: '0',
    fontSize: '1.5rem',
    color: '#ffcc00', // Yellow title
  },
  description: {
    margin: '5px 0 0 0',
    fontSize: '1rem',
    color: '#cccccc', // Light gray text
  },
  iconContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '50px',
    height: '50px',
    backgroundColor: '#0056d2', // Blue color for the button
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)', // Light white shadow
  },
  icon: {
    width: '30px',
    height: '30px',
  },
};

export default First_Page;
