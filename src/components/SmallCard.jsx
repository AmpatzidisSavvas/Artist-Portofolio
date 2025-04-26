import { useState } from "react";


const SmallCard = ({ src }) => {
    const [isVideoReady, setIsVideoReady] = useState(false);
    const handleCanPlay = () => {
        setIsVideoReady(true);
    }
  
  return (
    <div className="bento-tilt_2">
        {!isVideoReady && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-3 h-3 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.6s]" />
            </div>
        </div>
        )}
        <video
            src={src}
            loop
            muted
            autoPlay
            onCanPlay={handleCanPlay}
            playsInline
            style={{pointerEvents:"none"}}
            className="size-full object-cover object-center"
        />
    </div>
  );
}

export default SmallCard;