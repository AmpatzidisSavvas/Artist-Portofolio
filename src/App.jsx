// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import About from "./components/About";

// function App() {
// 	return (
// 		<main className="relative min-h-screen w-screen overflow-x-hidden">
// 			<Navbar />
// 			<Hero />
// 			<About />
// 			<Projects />
// 			<Contact />
// 			<Footer />
// 		</main>
// 	);
// }

import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy-loaded below-the-fold sections
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

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
