import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const FocusText = ({
	sentence = "True Focus",
	separator = " ",
	manualMode = false,
	blurAmount = 5,
	borderColor = "green",
	glowColor = "rgba(0, 255, 0, 0.6)",
	animationDuration = 0.5,
	pauseBetweenAnimations = 1
}) => {
	const words = sentence.split(separator);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [lastActiveIndex, setLastActiveIndex] = useState(null);
	const containerRef = useRef(null);
	const wordRefs = useRef([]);
	const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
	const [isMobile, setIsMobile] = useState(false);

	// 1. Detect touch devices (mobile/tablet) to cleanly toggle auto-play
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.matchMedia("(pointer: coarse)").matches);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	// 2. Animation Cycle (Autoplays on mobile, respects manualMode on desktop)
	useEffect(() => {
		const shouldAutoPlay = !manualMode || isMobile;

		if (shouldAutoPlay) {
			const interval = setInterval(
				() => {
					setCurrentIndex((prev) => (prev + 1) % words.length);
				},
				(animationDuration + pauseBetweenAnimations) * 1000
			);

			return () => clearInterval(interval);
		}
	}, [manualMode, isMobile, animationDuration, pauseBetweenAnimations, words.length]);

	// 3. Track box positioning dynamically (handles responsive layout shifts seamlessly)
	useEffect(() => {
		if (currentIndex === null || currentIndex === -1) return;
		if (!wordRefs.current[currentIndex] || !containerRef.current) return;

		const updatePosition = () => {
			if (!wordRefs.current[currentIndex] || !containerRef.current) return;
			const parentRect = containerRef.current.getBoundingClientRect();
			const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

			setFocusRect({
				x: activeRect.left - parentRect.left,
				y: activeRect.top - parentRect.top,
				width: activeRect.width,
				height: activeRect.height
			});
		};

		// Execute immediately and set up event listeners for layout recalculations
		updatePosition();

		// A small timeout ensures the DOM has settled if layout direction changes
		const timeoutId = setTimeout(updatePosition, 50);

		window.addEventListener("resize", updatePosition);
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("resize", updatePosition);
		};
	}, [currentIndex, words.length, isMobile]); // Recalculate if isMobile layout shifts

	// Desktop hover handling
	const handleMouseEnter = (index) => {
		if (manualMode && !isMobile) {
			setLastActiveIndex(index);
			setCurrentIndex(index);
		}
	};

	const handleMouseLeave = () => {
		if (manualMode && !isMobile) {
			setCurrentIndex(lastActiveIndex);
		}
	};

	return (
		/* CHANGED: flex-col on mobile, sm:flex-row on desktop */
		<div
			className="relative flex flex-col mt-4  lg:p-2 sm:flex-row gap-4 justify-start items-start w-full"
			ref={containerRef}
			style={{ outline: "none", userSelect: "none" }}
		>
			{words.map((word, index) => {
				const isActive = index === currentIndex;
				return (
					<span
						key={index}
						ref={(el) => {
							wordRefs.current[index] = el;
						}}
						// Adjusted mobile typography to center-align beautifully when stacked
						className="relative text-[1rem] sm:text-[1.6rem] font-black text-white text-center sm:text-left select-none"
						style={{
							filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
							"--border-color": borderColor,
							"--glow-color": glowColor,
							transition: `filter ${animationDuration}s ease`,
							outline: "none",
							userSelect: "none"
						}}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={handleMouseLeave}
					>
						{word}
					</span>
				);
			})}

			<motion.div
				className="absolute top-0 left-0 pointer-events-none box-border border-0"
				animate={{
					x: focusRect.x,
					y: focusRect.y,
					width: focusRect.width,
					height: focusRect.height,
					opacity: currentIndex >= 0 ? 1 : 0
				}}
				transition={{
					duration: animationDuration
				}}
				style={{
					"--border-color": borderColor,
					"--glow-color": glowColor
				}}
			>
				<span
					className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
					style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}
				></span>
				<span
					className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
					style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}
				></span>
				<span
					className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
					style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}
				></span>
				<span
					className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
					style={{ borderColor: "var(--border-color)", filter: "drop-shadow(0 0 4px var(--border-color))" }}
				></span>
			</motion.div>
		</div>
	);
};

export default FocusText;
