import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html, useProgress } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Button from "../components/ui/Button";

useGLTF.preload("/3Dscene.glb");

function Model() {
	const { scene } = useGLTF("/3Dscene.glb");
	return <primitive object={scene} scale={3.0} />;
}

function InteractionHint({ isInteracted }) {
	if (isInteracted) return null;

	return (
		<Html center position={[0, -0.5, 0]}>
			<div className="flex flex-col items-center justify-center pointer-events-none select-none animate-pulse">
				<div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-700/60 shadow-xl text-white/90 text-xs tracking-wider">
					<svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8m-8 5h8" />
					</svg>
					<span>Drag to rotate</span>
				</div>
			</div>
		</Html>
	);
}

function CanvasLoader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<div className="flex flex-col items-center justify-center text-white font-sans whitespace-nowrap">
				<div className="w-12 h-12 border-4 border-t-white border-zinc-700 rounded-full animate-spin mb-4"></div>
				<p className="text-sm tracking-widest font-medium uppercase">Loading...</p>
				<p className="text-xs text-zinc-400 mt-1">{Math.round(progress)}% Loaded</p>
			</div>
		</Html>
	);
}

export default function LandingPage({ onEnter }) {
	const { progress } = useProgress();
	const [isLoaded, setIsLoaded] = useState(false);
	const [hasInteracted, setHasInteracted] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 425);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (progress === 100) setIsLoaded(true);
	}, [progress]);

	const cameraPosition = isMobile ? [0, 2, 6.8] : [0, 0.2, 4.3];

	return (
		<div className="relative w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 w-full h-full">
				<Canvas
					key={isMobile ? "mobile" : "desktop"}
					dpr={[1, 2]}
					performance={{ min: 0.5 }}
					camera={{ position: cameraPosition, fov: 45 }}
					gl={{ powerPreference: "high-performance", antialias: true }}
				>
					<ambientLight intensity={0.6} color="#f1c232" />
					<directionalLight position={[5, 8, 10]} intensity={3.5} color="#F5F5DC" castShadow />
					<spotLight position={[0, 5, 2]} angle={0.4} penumbra={1} intensity={15.0} color="#fef08a" />

					<Suspense fallback={<CanvasLoader />}>
						<Center>
							<Model />
						</Center>
						{isLoaded && <InteractionHint isInteracted={hasInteracted} />}
					</Suspense>

					<OrbitControls
						enableZoom={true}
						minDistance={3}
						maxDistance={isMobile ? 7.0 : 4.0}
						enablePan={false}
						// Auto-rotate subtle movement until the user touches/drags
						autoRotate={!hasInteracted}
						autoRotateSpeed={1.5}
						enableDamping={true}
						dampingFactor={0.05}
						maxPolarAngle={Math.PI / 2}
						minPolarAngle={Math.PI / 2.5}
						maxAzimuthAngle={Math.PI / 6}
						minAzimuthAngle={-Math.PI / 6}
						onStart={() => setHasInteracted(true)}
					/>
				</Canvas>
			</div>

			<div
				className={`pointer-events-none absolute translate-y-[-240px] md:translate-y-[-310px] z-10 flex flex-col items-center justify-center transition-all duration-700 transform ${
					isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
				}`}
			>
				{isLoaded && (
					<Button
						onClick={onEnter}
						title={"Enter Website"}
						containerClass="pointer-events-auto py-3.5 px-7 tracking-wider !bg-white flex-center gap-1 w-full sm:w-auto shadow-2xl"
					/>
				)}
			</div>
		</div>
	);
}
