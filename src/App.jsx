import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import LandingPage from "./sections/LandingPage";

// 1. Keep lazy definitions as is (Vite splits these into separate chunks automatically)
const Navbar = lazy(() => import("./components/layout/Navbar"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

// Helper function to prefetch all deferred chunks in the background
const prefetchMainContent = () => {
	// Calling these dynamic imports imports them into browser cache without rendering
	const promises = [
		import("./components/layout/Navbar"),
		import("./sections/Hero"),
		import("./sections/About"),
		import("./sections/Projects"),
		import("./sections/Contact"),
		import("./components/layout/Footer")
	];
	// Silently resolve them in parallel
	Promise.allSettled(promises).catch((err) => {
		console.warn("Failed to prefetch main bundles:", err);
	});
};

function App() {
	const [hasEntered, setHasEntered] = useState(false);
	const [shouldRenderLanding, setShouldRenderLanding] = useState(true);

	// 2. Prefetch assets once the landing page is interactive (when browser is idle)
	useEffect(() => {
		if (hasEntered) return; // No need to prefetch if already entered

		let idleId;
		let timeoutId;

		const startPrefetch = () => {
			if ("requestIdleCallback" in window) {
				idleId = window.requestIdleCallback(() => prefetchMainContent());
			} else {
				timeoutId = setTimeout(prefetchMainContent, 2000); // Fallback for unsupported browsers
			}
		};

		// Wait a brief moment after mounting to ensure the landing page visual paint is completely free
		timeoutId = setTimeout(startPrefetch, 1000);

		return () => {
			if (idleId && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
			clearTimeout(timeoutId);
		};
	}, [hasEntered]);

	// 3. Handle smooth transition timing
	useEffect(() => {
		if (hasEntered) {
			const timeout = setTimeout(() => {
				setShouldRenderLanding(false);
			}, 700);
			return () => clearTimeout(timeout);
		}
	}, [hasEntered]);

	// 4. Dynamically import Vercel tools after window load
	useEffect(() => {
		const injectVercelScripts = async () => {
			try {
				const { injectSpeedInsights } = await import("@vercel/speed-insights");
				const { inject } = await import("@vercel/analytics");
				injectSpeedInsights();
				inject();
			} catch (err) {
				console.error("Failed to load analytics scripts:", err);
			}
		};

		if (document.readyState === "complete") {
			injectVercelScripts();
		} else {
			window.addEventListener("load", injectVercelScripts);
			return () => window.removeEventListener("load", injectVercelScripts);
		}
	}, []);

	// Memoize the enter handler to avoid unnecessary LandingPage re-renders
	const handleEnter = useCallback(() => {
		// Ensure assets start loading immediately on click just in case prefetch hasn't run
		prefetchMainContent();
		setHasEntered(true);
	}, []);

	return (
		<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
			{/* Main content: Mounts and transitions once the user enters */}
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

			{/* Landing/Welcome Screen */}
			{shouldRenderLanding && (
				<div className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${hasEntered ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}>
					<LandingPage
						onEnter={handleEnter}
						onHoverEnter={prefetchMainContent} // Trigger when user hovers the enter button
					/>
				</div>
			)}
		</div>
	);
}

export default App;
