import React from "react";
import "../styles/IcbZoomImage.css";

interface ZoomImageProps {
  src: string;
  onClose: () => void;
}

const getDescription = (src: string) => {
  if (src.includes("picture1")) {
    return "Photo 1 description.";
  } else if (src.includes("picture2")) {
    return "Photo 2 description.";
  } else if (src.includes("picture3")) {
    return "Photo 3 description.";
  } else if (src.includes("picture4")) {
    return "Photo 4 description.";
  } else if (src.includes("picture5")) {
    return "Photo 5 description.";
  } else if (src.includes("picture6")) {
    return "Photo 6 description.";
  } else if (src.includes("picture7")) {
    return "Photo 7 description.";
  } else if (src.includes("picture8")) {
    return "Photo 8 description.";
  } else {
    return "Description not available.";
  }
};

const ZoomImage: React.FC<ZoomImageProps> = ({ src, onClose }) => {
  return (
    <div className="overlay">
      <div className="zoomed-photo-container">
        <img src={src} alt="Zoomed" className="zoomed-photo" />
        <div className="text-box">
          <p>{getDescription(src)}</p>
          <button className="close-button" onClick={onClose} type="button">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomImage;