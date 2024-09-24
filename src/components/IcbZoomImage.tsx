import React from "react";
import "../styles/IcbZoomImage.css";

interface ZoomImageProps {
  src: string;
  onClose: () => void;
}

const getDescription = (src: string) => {
  switch (src) {
    case "picture1":
      return "Photo 1 description.";
    case "picture2":
      return "Photo 2 description.";
    case "picture3":
      return "Photo 3 description.";
    case "picture4":
      return "Photo 4 description.";
    case "picture5":
      return "Photo 5 description.";
    case "picture6":
      return "Photo 6 description.";
    case "picture7":
      return "Photo 7 description.";
    case "picture8":
      return "Photo 8 description.";
    default:
      return "";
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
