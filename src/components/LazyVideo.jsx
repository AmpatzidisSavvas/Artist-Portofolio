import React, { useState, useEffect, useRef } from "react";

const LazyVideo = ({ 
     src, ...props
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target); // ✅ Stop observing once loaded
          }
        },
        { threshold: 0.3 } // Slightly reduced threshold for earlier loading
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) observer.unobserve(videoRef.current);
      };
    }, []);
  

  return (
    <video
      ref={videoRef}
      src={isLoaded ? src : ""}
      {...props}
    />
  );
};

export default LazyVideo;
