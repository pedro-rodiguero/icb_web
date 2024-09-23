/* eslint-disable react/no-array-index-key */
import React from "react";
import "../styles/ImageCollage.css";

const ImageCollage: React.FC = () => {
  const imageUrls = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
  ];

  return (
    <div className="image-collage">
      <img
        src="/images/overall.svg"
        alt="Overall Template"
        className="template"
      />
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`ICB ${index + 1}`}
          className={`image image-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageCollage;
