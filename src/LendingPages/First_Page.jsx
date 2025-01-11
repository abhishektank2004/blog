import React from 'react';
import { useNavigate } from 'react-router-dom';

function First_Page() {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = (cardId) => {
    // Navigate to the details page with the card ID as a parameter
    navigate(`/details`);
  };

  return (
    <div style={styles.container}>
      {[1, 2].map((cardId) => (
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
            <h3>What Makes Us Closer to Nature</h3>
            <p>Explore the beauty of nature.</p>
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
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gap: '20px',
    margin: '20px auto',
    padding: '20px',
    maxWidth: '1200px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
  card: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    filter: 'brightness(0.7)',
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
  iconContainer: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '50px',
    height: '50px',
    backgroundColor: '#0056d2',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  icon: {
    width: '30px',
    height: '30px',
  },
};

export default First_Page;
