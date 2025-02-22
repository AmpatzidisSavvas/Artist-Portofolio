import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({ src, alt = "", className = "" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
      {isLoaded && (
        <img ref={imageRef} src={src} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
      )}
    </div>
  );
};

export default LazyImage;
