import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html, useProgress } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import Button from "../components/ui/Button";

function isTargetMesh(object) {
	return object.isMesh;
}

function Model() {
	const { scene } = useGLTF("/3Dscene.glb");
	return <primitive object={scene} scale={3.0} />;
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

	useEffect(() => {
		if (progress === 100) {
			setIsLoaded(true);
		}
	}, [progress]);

	return (
		<div className="relative w-screen h-screen bg-zinc-950 flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 w-full h-full">
				<Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
					<ambientLight intensity={0.6} color="#f1c232" />
					<directionalLight position={[5, 8, 10]} intensity={3.0} color="#ffffff" castShadow />
					<spotLight position={[0, 5, 2]} angle={0.4} penumbra={1} intensity={10.0} color="#fef08a" />

					<Suspense fallback={<CanvasLoader />}>
						<Center>
							<Model />
						</Center>
					</Suspense>

					<OrbitControls
						enableZoom={true}
						minDistance={3}
						maxDistance={4.0}
						enablePan={false}
						autoRotate={false}
						enableDamping={true}
						dampingFactor={0.05}
						maxPolarAngle={Math.PI / 1.8}
						minPolarAngle={Math.PI / 2.5}
						maxAzimuthAngle={Math.PI / 6}
						minAzimuthAngle={-Math.PI / 6}
					/>
				</Canvas>
			</div>

			<div
				className={`pointer-events-none absolute -translate-y-[330px] z-10 flex flex-col items-center justify-center transition-all duration-700 transform ${
					isLoaded ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"
				}`}
			>
				{isLoaded && (
					<Button
						onClick={onEnter}
						title={"Enter"}
						containerClass="pointer-events-auto py-3.5 px-12 tracking-wider !bg-white flex-center gap-1 w-full sm:w-auto shadow-2xl"
					/>
				)}
			</div>
		</div>
	);
}
