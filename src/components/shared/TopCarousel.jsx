import React, { useRef } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const TopCarousel = ({ slides }) => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  const handlePrev = () => {
    slider.current?.prev();
  };

  const handleNext = () => {
    slider.current?.next();
  };

  return (
    <section className="relative w-[90%] mx-auto px-6">
      {/* Controls */}
      <div className="absolute top-1/2  left-0 z-10">
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" className="text-black bg-white rounded-2xl border border-white"/>
        </button>
      </div>
      <div className="absolute top-1/2 right-0 z-10">
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="text-black bg-white rounded-2xl border border-white"/>
        </button>
      </div>
      
      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {slides.map((src, index) => (
          <div key={index} className="keen-slider__slide rounded-lg">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCarousel;
