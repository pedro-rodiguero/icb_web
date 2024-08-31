import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageCarouselProps {
  imageUrls: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imageUrls }) => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;