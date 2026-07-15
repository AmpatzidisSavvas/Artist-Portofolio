import { lazy, Suspense, useState, useEffect } from "react";
import LandingPage from "./sections/LandingPage";

// 1. Lazy-load EVERYTHING not needed for the initial Landing Page
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

function App() {
	const [hasEntered, setHasEntered] = useState(false);
	const [shouldRenderLanding, setShouldRenderLanding] = useState(true);

	useEffect(() => {
		if (hasEntered) {
			const timeout = setTimeout(() => {
				setShouldRenderLanding(false);
			}, 700);
			return () => clearTimeout(timeout);
		}
	}, [hasEntered]);

	useEffect(() => {
		// Dynamically import Vercel tools only after the window load event
		const injectVercelScripts = async () => {
			const { injectSpeedInsights } = await import("@vercel/speed-insights");
			const { inject } = await import("@vercel/analytics");
			injectSpeedInsights();
			inject();
		};

		if (document.readyState === "complete") {
			injectVercelScripts();
		} else {
			window.addEventListener("load", injectVercelScripts);
			return () => window.removeEventListener("load", injectVercelScripts);
		}
	}, []);

	return (
		<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
			{/* 2. ONLY mount and download main content once the user clicks "Enter" */}
			{hasEntered && (
				<main className="animate-enter-fade">
					<Suspense fallback={<div className="min-h-screen bg-blue-50" />}>
						<Navbar />
						<Hero />
						<About />
						<Projects />
						<Contact />
						<Footer />
					</Suspense>
				</main>
			)}

			{/* 3. Landing Page (Loaded statically so it displays instantly) */}
			{shouldRenderLanding && (
				<div className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${hasEntered ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}>
					<LandingPage onEnter={() => setHasEntered(true)} />
				</div>
			)}
		</div>
	);
}

export default App;
