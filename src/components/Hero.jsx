import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalVideos = 4;
  const videoRef = useRef(false);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  
  const handleNextVideo = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    gsap.to(videoRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        const nextIndex = currentIndex + 1 > totalVideos ? 1 : currentIndex + 1;
        setCurrentIndex(nextIndex);
        setTimeout(() => {
          gsap.to(videoRef.current, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => setIsTransitioning(false),
          });
        }, 100);
      },
    });
  };

  useGSAP(
    () => {
      if (hasClicked) {

        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP( () => {
    gsap.set('#video-frame', {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: ' 0 0 40% 10%'
    })

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  })

  
  const handleCanPlay = () => {
    setIsVideoReady(true);
  }

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div id='home' className=" relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className='absolute-center absolute z-50 cursor-pointer'>
            <button 
              onClick={handleNextVideo} 
              className="custom-button">
              Click Me
            </button>
          </div>
          <div className="absolute inset-0 bg-black"/> 
          {!isVideoReady && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="flex space-x-2">
              <div className="w-3 h-3  bg-gray-800  rounded-full animate-bounce" />
              <div className="w-3 h-3  bg-gray-800  rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="w-3 h-3  bg-gray-800  rounded-full animate-bounce [animation-delay:-0.6s]" />
            </div>
          </div>
          )}
          <video
            src={getVideoSrc(
              currentIndex 
            )}
            autoPlay
            loop
            muted
            playsInline
            onCanPlay={handleCanPlay}
            style={{pointerEvents:"none"}}
            className=" absolute left-0 top-0 size-full object-cover object-center z-20"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          Portofolio
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className=" mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100 mb-2">
              savvas ampatzidis
            </h1>
            <div className='bg-yellow-200 flex-center gap-1 group relative z-10 w-fit overflow-hidden '>
              <p className="mb-1 p-3 max-x-64 font-circular-web text-black">
                Multidisciplinary Visual Designer
              </p>
            </div>
            <div className='bg-pink-200 flex-center gap-1 group relative z-10 w-fit overflow-hidden  mt-2'>
              <p className="mb-1 p-3 max-x-64 font-circular-web text-black">
                Visual Storyteller
              </p>
            </div>

          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">
        Portofolio
      </h1>
    </div>
  );
};

export default Hero