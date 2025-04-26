import React, { useState, useEffect, useRef } from "react";

const LazyVideo = ({ 
     src, ...props
  }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVideoReady, setIsVideoReady] = useState(false);
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
    
    const handleCanPlay = () => {
      setIsVideoReady(true);
    }

  return (
    <>
      <div className="absolute inset-0 bg-black z-1"/> 
      {!isVideoReady && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex space-x-2">
          <div className="w-3 h-3  bg-gray-300  rounded-full animate-bounce" />
          <div className="w-3 h-3  bg-gray-300  rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-3 h-3  bg-gray-300  rounded-full animate-bounce [animation-delay:-0.6s]" />
        </div>
      </div>
      )}
      <video
        ref={videoRef}
        src={isLoaded ? src : ""}
        onCanPlay={handleCanPlay}
        className={`w-full h-auto pointer-events-none relative z-20 transition-opacity duration-500 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
        {...props}
      />
    </>
  );
};

export default LazyVideo;
