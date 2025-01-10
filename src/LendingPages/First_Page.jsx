import React from "react";
import { useNavigate } from "react-router-dom";
import errow from "../images/errow.webp"

const CardList = () => {
  const navigate = useNavigate();

  return (
   <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "1200px",
      }}
    >
      {/* Card 1 */}
      <div
        onClick={() => navigate(`/details`)}
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://www.1zoom.me/prev/45/44928.jpg"
          alt="Nature"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h3>What Makes Us Closer to Nature</h3>
          <p>Explore the beauty of nature.</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#0056d2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={errow}
            alt="Arrow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div
        onClick={() => navigate(`/details`)}
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAq7EX8GMck8d7peNcsaUT_vSsgzJPipPW38k7UVyXkpbjFqJLV4GkvHvnhPqyP6LXT0&usqp=CAU"
          alt="Mountains"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h3>Discover the Mountains</h3>
          <p>Experience breathtaking views.</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#0056d2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={errow}
            alt="Arrow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        margin: "20px auto",
        padding: "20px",
        maxWidth: "1200px",
      }}
    >
      {/* Card 1 */}
      <div
        onClick={() => navigate(`/details`)}
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://www.1zoom.me/prev/45/44928.jpg"
          alt="Nature"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h3>What Makes Us Closer to Nature</h3>
          <p>Explore the beauty of nature.</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#0056d2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={errow}
            alt="Arrow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Card 2 */}
      <div
        onClick={() => navigate(`/details`)}
        style={{
          position: "relative",
          width: "100%",
          height: "450px",
          cursor: "pointer",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFAq7EX8GMck8d7peNcsaUT_vSsgzJPipPW38k7UVyXkpbjFqJLV4GkvHvnhPqyP6LXT0&usqp=CAU"
          alt="Mountains"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            color: "white",
            padding: "20px",
            boxSizing: "border-box",
            textAlign: "center",
          }}
        >
          <h3>Discover the Mountains</h3>
          <p>Experience breathtaking views.</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#0056d2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={errow}
            alt="Arrow"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
   </>
  );
};

export default CardList;
