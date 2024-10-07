import React, { useState } from "react";

const Gallery = ({ children }) => {
  return <div className="gallery-grid">{children}</div>;
};

Gallery.Card = ({ imgSrc, title, price, info }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="gallery-card">
      <div className="image-container">
        <img
          onClick={() => setIsVisible(!isVisible)}
          src={imgSrc}
          className="art-image"
          alt="k"
        />
        {isVisible ? "" : ""}
      </div>
      {isVisible && (
        <div className="popup-image" onClick={() => setIsVisible(false)}>
          <div className="popup-image-text">
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{info}</p>
            <a
              href="/contact"
              target="_blank"
              style={{
                width: "1rem",
                background: "black",

                fontSize: "16px",
                color: "white",
              }}
            >
              bestill
            </a>
          </div>
          <img src={imgSrc} />
          <span onClick={() => setIsVisible(false)}>&times;</span>
        </div>
      )}

      <div className="text-container">
        <h3>{title}</h3>
        <p>{price}</p>
        <p style={{ fontSize: "12px", fontWeight: "300" }}>{info}</p>
        <a
          href="/contact"
          target="_blank"
          style={{ background: "transparent", fontSize: "12px" }}
        >
          bestill
        </a>
      </div>
    </div>
  );
};

// Gallery.Card = ({ imgSrc, title, price }) => {
//   return (
//     <div className="gallery-card">
//       <div className="image-container">
//         <img src={imgSrc} className="art-image" alt="k" />
//       </div>
//       <div className="text-container">
//         <h3>{title}</h3>
//         <p>{price}</p>
//       </div>
//     </div>
//   );
// };
export default Gallery;
