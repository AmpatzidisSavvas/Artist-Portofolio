import { lazy, Suspense } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";

// Lazy-loaded below-the-fold sections
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

function App() {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
			{/* Above the fold (loads immediately) */}
			<Navbar />
			<Hero />

			{/* Below the fold (lazy-loaded JS) */}
			<Suspense fallback={null}>
				<About />
				<Projects />
				<Contact />
				<Footer />
			</Suspense>
		</main>
	);
}

export default App;
