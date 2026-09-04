import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import LandingPage from "./sections/LandingPage";

const ClickSpark = lazy(() => import("./components/shared/ClickSpark"));
const GridPreloader = lazy(() => import("./components/ui/GridPreloader"));

const StaggeredMenu = lazy(() => import("./components/layout/StaggeredMenu"));
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));

function App() {
	const [hasEntered, setHasEntered] = useState(false);
	const [shouldRenderLanding, setShouldRenderLanding] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const injectVercelScripts = () => {
			const run = async () => {
				try {
					const [{ injectSpeedInsights }, { inject }] = await Promise.all([import("@vercel/speed-insights"), import("@vercel/analytics")]);
					injectSpeedInsights();
					inject();
				} catch (err) {
					console.error("Failed to load analytics scripts:", err);
				}
			};

			if ("requestIdleCallback" in window) {
				window.requestIdleCallback(() => run());
			} else {
				setTimeout(run, 2000);
			}
		};

		if (document.readyState === "complete") {
			injectVercelScripts();
		} else {
			window.addEventListener("load", injectVercelScripts, { once: true });
		}
	}, []);

	const handleHoverEnter = useCallback(() => {
		import("./components/layout/StaggeredMenu");
		import("./sections/Hero");
	}, []);

	const handleEnter = useCallback(() => {
		setIsLoading(true);

		import("./sections/About");
		import("./sections/Projects");
		import("./sections/Contact");
		import("./components/layout/Footer");
	}, []);

	const handleBeforeCollapse = useCallback(() => {
		setHasEntered(true);
		setShouldRenderLanding(false);
	}, []);

	const handlePreloaderComplete = useCallback(() => {
		setIsLoading(false);
	}, []);

	return (
		<div className="relative min-h-screen w-screen overflow-x-hidden bg-blue-50">
			{shouldRenderLanding && (
				<div className="fixed inset-0 z-40">
					<LandingPage onEnter={handleEnter} onHoverEnter={handleHoverEnter} />
				</div>
			)}

			{isLoading && (
				<Suspense fallback={null}>
					<GridPreloader onBeforeCollapse={handleBeforeCollapse} onComplete={handlePreloaderComplete} logoSrc="/logo.svg" tileColor="#000000" />
				</Suspense>
			)}

			{hasEntered && (
				<Suspense fallback={null}>
					<ClickSpark sparkColor="#EC407A" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
						<main className="animate-enter-fade">
							<StaggeredMenu />
							<Hero />
							<About />
							<Projects />
							<Contact />
							<Footer />
						</main>
					</ClickSpark>
				</Suspense>
			)}
		</div>
	);
}

export default App;
