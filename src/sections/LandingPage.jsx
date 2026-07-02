import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

function Model({ onEnter }) {
	const { scene } = useGLTF("/3Dscene.glb");

	return (
		<primitive
			object={scene}
			scale={1.0}
			onClick={(e) => {
				e.stopPropagation();
				if (isTargetMesh(e.object)) {
					if (onEnter) onEnter();
				}
			}}
			onPointerOver={(e) => {
				e.stopPropagation();

				if (isTargetMesh(e.object)) {
					document.body.style.cursor = "pointer";
				} else {
					document.body.style.cursor = "auto";
				}
			}}
			onPointerOut={(e) => {
				e.stopPropagation();
				document.body.style.cursor = "auto";
			}}
		/>
	);
}

function CanvasLoader() {
	const { progress } = useProgress();
	return (
		<Html center>
			<div className="flex flex-col items-center justify-center text-white font-sans whitespace-nowrap">
				<div className="w-12 h-12 border-4 border-t-white border-zinc-700 rounded-full animate-spin mb-4"></div>
				<p className="text-sm tracking-widest font-medium uppercase">Loading 3D Experience</p>
				<p className="text-xs text-zinc-400 mt-1">{Math.round(progress)}% Loaded</p>
			</div>
		</Html>
	);
}

export default function LandingPage({ onEnter }) {
	return (
		<div className="relative w-screen h-screen bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">
			<div className="absolute inset-0 w-full h-full">
				<Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
					{/* Custom Lighting Setup */}
					<ambientLight intensity={0.8} color="#b9e3ff" />
					<directionalLight position={[5, 8, 10]} intensity={3.0} color="#ffffff" castShadow />
					<pointLight position={[-4, 3, -4]} intensity={10} color="#3b82f6" distance={20} />
					<spotLight position={[0, 5, 2]} angle={0.4} penumbra={1} intensity={15.0} color="#fef08a" />

					<Suspense fallback={<CanvasLoader />}>
						<Center>
							<Model onEnter={onEnter} />
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
		</div>
	);
}
