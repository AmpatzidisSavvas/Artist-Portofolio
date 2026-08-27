import React, { useEffect, useRef, useState, useCallback } from "react";
import FocusText from "../components/shared/FocusText";

const Hero = () => {
	const [playlist, setPlaylist] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [isVideoReady, setIsVideoReady] = useState(false);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 3;
	const videoRef = useRef(null);

	const shuffleArray = (array) => {
		return array
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	};

	useEffect(() => {
		const initialPlaylist = shuffleArray([...Array(totalVideos)].map((_, i) => i + 1));
		setPlaylist(initialPlaylist);
		setCurrentIndex(0);
	}, []);

	const handleVideoLoad = () => {
		setLoadedVideos((prev) => prev + 1);
	};

	useEffect(() => {
		if (loadedVideos >= totalVideos) {
			setLoading(false);
		}
	}, [loadedVideos, totalVideos]);

	const handleNextVideo = useCallback(() => {
		let nextIndexInPlaylist = currentIndex + 1;

		if (nextIndexInPlaylist >= playlist.length) {
			const newPlaylist = shuffleArray([...Array(totalVideos)].map((_, i) => i + 1));
			setPlaylist(newPlaylist);
			nextIndexInPlaylist = 0;
		}

		setCurrentIndex(nextIndexInPlaylist);
	}, [currentIndex, playlist, totalVideos]);

	const handleCanPlay = () => {
		setIsVideoReady(true);
	};

	const getVideoSrc = (index) => {
		if (index === undefined) return "";
		return `videos/hero-${index}.webm`;
	};

	return (
		<div id="home" className="relative h-dvh w-screen overflow-x-hidden">
			<div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75">
				<div>
					{/* Loading Indicator */}
					{!isVideoReady && (
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<div className="flex space-x-2">
								<div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce" />
								<div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.3s]" />
								<div className="w-3 h-3 bg-gray-800 rounded-full animate-bounce [animation-delay:-0.6s]" />
							</div>
						</div>
					)}

					{/* Video Player */}
					<video
						ref={videoRef}
						src={getVideoSrc(playlist[currentIndex])}
						autoPlay
						muted
						preload="auto"
						loop={false}
						playsInline
						onCanPlay={handleCanPlay}
						onEnded={handleNextVideo}
						style={{ pointerEvents: "none" }}
						className="absolute left-0 top-0 size-full object-cover object-center z-20"
						onLoadedData={handleVideoLoad}
					/>
				</div>

				<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">Portfolio</h1>

				<div className="absolute left-0 top-0 z-40 size-full">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="special-font hero-heading text-blue-100 mb-2">savvas ampatzidis</h1>
						<FocusText
							sentence="Multidisciplinary Visual Designer"
							manualMode={false}
							blurAmount={4}
							borderColor="#fef08a"
							animationDuration={0.8}
							pauseBetweenAnimations={1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
