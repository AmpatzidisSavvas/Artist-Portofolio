import { useEffect, useRef, useId } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LiquidImageReveal = ({
	src,
	width = 600,
	height = 400,
	className = "",
	centerX,
	centerY,
	turbulenceFrequency = 0.03,
	turbulenceOctaves = 10,
	displacementScale = 100,
	maxRadius
}) => {
	const containerRef = useRef(null);
	const circleRef = useRef(null);
	const id = useId();

	const maskId = `liquid-mask-${id}`;
	const filterId = `liquid-filter-${id}`;

	const defaultCenterX = centerX ?? width / 2;
	const defaultCenterY = centerY ?? height / 2;
	const defaultMaxRadius = maxRadius ?? Math.sqrt(width * width + height * height) * 0.6;

	useEffect(() => {
		if (!circleRef.current || !containerRef.current) return;

		let ctx = gsap.context(() => {
			gsap.fromTo(
				circleRef.current,
				{
					attr: { r: 0 }
				},
				{
					attr: { r: defaultMaxRadius },
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						start: "top 90%",
						end: "bottom 40%",
						scrub: 1
					}
				}
			);
		});

		return () => ctx.revert();
	}, [defaultMaxRadius]);

	return (
		<div ref={containerRef} className={`overflow-hidden ${className}`.trim()}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} className="w-full h-full block">
				<defs>
					<filter id={filterId}>
						<feTurbulence type="fractalNoise" baseFrequency={turbulenceFrequency} numOctaves={turbulenceOctaves} result="noise" />
						<feDisplacementMap in="SourceGraphic" in2="noise" scale={displacementScale} xChannelSelector="R" yChannelSelector="G" />
					</filter>

					<mask id={maskId}>
						<circle ref={circleRef} cx={defaultCenterX} cy={defaultCenterY} r="0" fill="white" filter={`url(#${filterId})`} />
					</mask>
				</defs>

				<image href={src} mask={`url(#${maskId})`} width={width} height={height} preserveAspectRatio="xMidYMid slice" />
			</svg>
		</div>
	);
};

export default LiquidImageReveal;
