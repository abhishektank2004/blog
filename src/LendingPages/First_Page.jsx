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
              grid-template-columns: 1fr !important;
              padding: 16px !important;
              justify-items: center !important;
              max-width: 500px !important;
              margin: 0 auto !important;
            }
            .cards-container > div {
              width: 100% !important;
              max-width: 400px !important;
              margin-bottom: 24px !important;
            }
          }

          @media (max-width: 430px) {
            .cards-container {
              padding: 12px !important;
              max-width: 100% !important;
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
    gap: '24px',
    margin: '0 auto',
    padding: '24px',
    maxWidth: '1200px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    backgroundColor: '#000000',
    justifyItems: 'center',
  },
  card: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    height: '350px',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    transition: 'transform 0.3s ease',
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    filter: 'brightness(0.5)',
  },
  textContainer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    color: 'white',
    padding: '24px',
    boxSizing: 'border-box',
    textAlign: 'left',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
  },
  title: {
    margin: '0',
    fontSize: '1.5rem',
    color: '#ffcc00',
    fontWeight: '600',
  },
  description: {
    margin: '8px 0 0 0',
    fontSize: '1rem',
    color: '#cccccc',
  },
  iconContainer: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '44px',
    height: '44px',
    backgroundColor: '#0056d2',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(255, 255, 255, 0.2)',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default First_Page;