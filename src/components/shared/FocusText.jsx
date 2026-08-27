import { useEffect, useRef, useState, useMemo, useCallback } from "react";
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
	const words = useMemo(() => sentence.split(separator), [sentence, separator]);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [lastActiveIndex, setLastActiveIndex] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

	const containerRef = useRef(null);
	const wordRefs = useRef([]);

	const cornerStyle = useMemo(
		() => ({
			borderColor: "var(--border-color)",
			filter: "drop-shadow(0 0 4px var(--border-color))"
		}),
		[]
	);

	const updatePosition = useCallback(() => {
		const currentWordEl = wordRefs.current[currentIndex];
		const containerEl = containerRef.current;

		if (!currentWordEl || !containerEl) return;

		requestAnimationFrame(() => {
			const parentRect = containerEl.getBoundingClientRect();
			const activeRect = currentWordEl.getBoundingClientRect();

			setFocusRect({
				x: activeRect.left - parentRect.left,
				y: activeRect.top - parentRect.top,
				width: activeRect.width,
				height: activeRect.height
			});
		});
	}, [currentIndex]);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(pointer: coarse)");
		setIsMobile(mediaQuery.matches);

		const handleMediaChange = (e) => setIsMobile(e.matches);
		mediaQuery.addEventListener("change", handleMediaChange);

		return () => mediaQuery.removeEventListener("change", handleMediaChange);
	}, []);

	useEffect(() => {
		const shouldAutoPlay = !manualMode || isMobile;
		if (!shouldAutoPlay || words.length === 0) return;

		const interval = setInterval(
			() => {
				setCurrentIndex((prev) => (prev + 1) % words.length);
			},
			(animationDuration + pauseBetweenAnimations) * 1000
		);

		return () => clearInterval(interval);
	}, [manualMode, isMobile, animationDuration, pauseBetweenAnimations, words.length]);

	useEffect(() => {
		if (currentIndex < 0 || currentIndex >= words.length) return;

		updatePosition();

		const containerEl = containerRef.current;
		if (!containerEl) return;

		const observer = new ResizeObserver(() => updatePosition());
		observer.observe(containerEl);

		const activeWordEl = wordRefs.current[currentIndex];
		if (activeWordEl) observer.observe(activeWordEl);

		return () => observer.disconnect();
	}, [currentIndex, words.length, updatePosition]);

	const handleMouseEnter = useCallback(
		(index) => {
			if (manualMode && !isMobile) {
				setLastActiveIndex(index);
				setCurrentIndex(index);
			}
		},
		[manualMode, isMobile]
	);

	const handleMouseLeave = useCallback(() => {
		if (manualMode && !isMobile && lastActiveIndex !== null) {
			setCurrentIndex(lastActiveIndex);
		}
	}, [manualMode, isMobile, lastActiveIndex]);

	return (
		<div className="relative flex flex-col mt-4 lg:p-2 sm:flex-row gap-4 justify-start items-start w-full select-none outline-none" ref={containerRef}>
			{words.map((word, index) => {
				const isActive = index === currentIndex;
				return (
					<span
						key={`${word}-${index}`}
						ref={(el) => {
							wordRefs.current[index] = el;
						}}
						className="relative text-[1rem] sm:text-[1.6rem] font-black text-white text-center sm:text-left select-none outline-none"
						style={{
							filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
							transition: `filter ${animationDuration}s ease`
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
					duration: animationDuration,
					ease: "easeInOut"
				}}
				style={{
					"--border-color": borderColor,
					"--glow-color": glowColor
				}}
			>
				<span className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0" style={cornerStyle} />
				<span className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0" style={cornerStyle} />
				<span className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0" style={cornerStyle} />
				<span className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0" style={cornerStyle} />
			</motion.div>
		</div>
	);
};

export default FocusText;
