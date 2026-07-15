import { lazy, Suspense, useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import LandingPage from "./sections/LandingPage";

// Lazy-loaded sections
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
		const injectVercelScrips = async () => {
			const { injectSpeedInsights } = await import("@vercel/speed-insights");
			const { inject } = await import("@vercel/analytics");
			injectSpeedInsights();
			inject();
		};

		if (document.readyState === "complete") {
			injectVercelScrips();
		} else {
			window.addEventListener("load", injectVercelScrips);
			return () => window.removeEventListener("load", injectVercelScrips);
		}
	}, []);

	return (
		<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
			{/* 1. ONLY mount the main content once the user has clicked "Enter" */}
			{hasEntered && (
				<main className="animate-enter-fade">
					<Navbar />
					<Hero />

					<Suspense fallback={null}>
						<About />
						<Projects />
						<Contact />
						<Footer />
					</Suspense>
				</main>
			)}

			{/* 2. Landing Page */}
			{shouldRenderLanding && (
				<div className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${hasEntered ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}>
					<LandingPage onEnter={() => setHasEntered(true)} />
				</div>
			)}
		</div>
	);
}

export default App;
