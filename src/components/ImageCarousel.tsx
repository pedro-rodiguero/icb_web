/* eslint-disable react/require-default-props */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ImageCarousel.css"; // Import the CSS file

interface ImageCarouselProps {
  imageUrls: string[];
  height?: string | number; // Correct height prop type
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls, height }) => {
  return (
    <div style={{ height }}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {imageUrls.map((url) => (
          <div key={url} className="carousel-image-container">
            <LazyLoadImage
              src={url}
              alt="Slide"
              effect="blur"
              className="carousel-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
