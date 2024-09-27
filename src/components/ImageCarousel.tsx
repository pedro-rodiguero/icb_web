import React from "react";
import { Carousel } from "react-responsive-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageCarouselProps {
  imageUrls: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls }) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {imageUrls.map((url) => (
        <div key={url}>
          <LazyLoadImage
            src={url}
            alt="Slide"
            effect="blur"
            width="100%"
            height="auto"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
