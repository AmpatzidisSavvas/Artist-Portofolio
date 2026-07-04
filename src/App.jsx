import { lazy, Suspense, useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import LandingPage from "./sections/LandingPage";

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

	return (
		<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50 ">
			<main className={`transition-all duration-1000 ease-out ${hasEntered ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
				<Navbar />
				<Hero />

				<Suspense fallback={null}>
					<About />
					<Projects />
					<Contact />
					<Footer />
				</Suspense>
			</main>

			{shouldRenderLanding && (
				<div className={`fixed inset-0 z-50 transition-all duration-700 ease-in-out ${hasEntered ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}>
					<LandingPage onEnter={() => setHasEntered(true)} />
				</div>
			)}

			<SpeedInsights />
			<Analytics />
		</div>
	);
}

export default App;
