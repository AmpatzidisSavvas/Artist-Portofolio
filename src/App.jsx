import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import LandingPage from "./sections/LandingPage";
import ClickSpark from "./components/shared/ClickSpark";
import GridPreloader from "./components/ui/GridPreloader";

const StaggeredMenu = lazy(() => import("./components/layout/StaggeredMenu"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

const prefetchMainContent = () => {
	import("./components/layout/StaggeredMenu");
	import("./sections/Hero");
	import("./sections/About");
	import("./sections/Projects");
	import("./sections/Contact");
	import("./components/layout/Footer");
};

function App() {
	const [hasEntered, setHasEntered] = useState(false);
	const [shouldRenderLanding, setShouldRenderLanding] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const injectVercelScripts = async () => {
			try {
				const [{ injectSpeedInsights }, { inject }] = await Promise.all([import("@vercel/speed-insights"), import("@vercel/analytics")]);
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

	const handleEnter = useCallback(() => {
		setIsLoading(true);
	}, []);

	const handleBeforeCollapse = useCallback(() => {
		setHasEntered(true);
		setShouldRenderLanding(false);
	}, []);

	const handlePreloaderComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	return (
		<ClickSpark sparkColor="#EC407A" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
			<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
				{shouldRenderLanding && (
					<div className="fixed inset-0 z-40">
						<LandingPage onEnter={handleEnter} onHoverEnter={prefetchMainContent} />
					</div>
				)}

				{isLoading && <GridPreloader onBeforeCollapse={handleBeforeCollapse} onComplete={handlePreloaderComplete} logoSrc="/logo.svg" tileColor="#000000" />}

				{hasEntered && (
					<main className="animate-enter-fade">
						<Suspense fallback={null}>
							<StaggeredMenu />
						</Suspense>
						<Suspense fallback={<div className="min-h-screen bg-blue-50" />}>
							<Hero />
						</Suspense>
						<Suspense fallback={null}>
							<About />
						</Suspense>
						<Suspense fallback={null}>
							<Projects />
						</Suspense>
						<Suspense fallback={null}>
							<Contact />
						</Suspense>
						<Suspense fallback={null}>
							<Footer />
						</Suspense>
					</main>
				)}
			</div>
		</ClickSpark>
	);
}

export default App;
