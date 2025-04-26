import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';



const TopCarousel = ({slides, options }) => {
  
  const handlePrev = () => {
    document.querySelector('.carousel .control-prev').click();
  };

  const handleNext = () => {
    document.querySelector('.carousel .control-next').click();
  };
  return (
    <section className="react-carousel">
      <div className="react-carousel__controls">
        <button onClick={handlePrev}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
        <button onClick={handleNext}><FontAwesomeIcon icon={faCircleArrowRight} /></button>
      </div>

      <Carousel
        infiniteLoop={true} 
        interval={3000} 
        showThumbs={false}  
        showStatus={false}  
        showIndicators={false}  
        {...options} 
        dynamicHeight={false}
        
        
      >
        {slides.map((src, index) => (
          <div key={index} className="react-carousel__slide">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="react-carousel__slide__img"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

  


export default TopCarousel;
