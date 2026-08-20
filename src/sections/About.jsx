import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "../components/shared/AnimatedTitle";
import FadeRevealParagraph from "../components/shared/FadeRevealParagraph";
import FadeTextReveal from "../components/shared/FadeTextReveal";
import ButtonBlue from "../components/ui/ButtonBlue";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiquidImageReveal from "../components/ui/LiquidImageReveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const festivalContainerRef = useRef(null);
	const [showImages, setShowImages] = useState(false);

	useEffect(() => {
		if (!festivalContainerRef.current) return;

		const items = gsap.utils.toArray(festivalContainerRef.current.children);

		let ctx = gsap.context(() => {
			items.forEach((item) => {
				gsap.fromTo(
					item,
					{ x: 80, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.7,
						ease: "power2.out",
						scrollTrigger: {
							trigger: item,
							start: "top 85%",
							end: "bottom 15%",
							toggleActions: "play reverse play reverse"
						}
					}
				);
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section id="about" className="my-20 min-h-[24rem] w-full px-6 md:px-10">
			<div className="relative rounded-2xl bg-blue-50 py-10 sm:py-10 text-black">
				<div className="flex flex-col items-center text-center">
					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-6xl mx-auto px-4">
						{/* Left Text Section */}
						<div className="lg:w-2/3 space-y-6 md:text-left">
							<div className=" rounded-xl p-6 ">
								<div className="mb-5 flex justify-center w-full sm:hidden">
									<motion.img
										src="img/flowerIcon.webp"
										alt="Flower icon"
										className="w-[140px] h-[140px] object-contain"
										initial={{ opacity: 0, y: 30, scale: 0.9 }}
										whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
										viewport={{ once: true, amount: 0.2 }}
										transition={{ duration: 1.5, ease: [0.21, 0.47, 0.32, 0.98] }}
									/>
								</div>
								<div className="mb-8">
									<FadeRevealParagraph
										paragraphs={[
											`Savvas “The Pack” Ampatzidis is a self-taught multidisciplinary visual designer based in Thessaloniki, Greece.`,
											`His work is deeply rooted in storytelling, blending violence, romance, chaos, and beauty into rich visual narratives.These stories reflect the raw, often contradictory nature of life. Using a mix of 2D and 3D techniques, he creates striking, layered visuals that invite viewers to look beneath the surface. His artistic range spans multiple mediums, evolving across disciplines while maintaining a strong personal voice.`,
											`His work has been exhibited internationally and featured at festivals dedicated to illustration, comics, and animation.`
										]}
									/>
								</div>

								<h3 className="text-2xl font-bold mb-4">
									<FadeTextReveal text={"Filmography"} />
								</h3>
								<h4 className="text-xl font-semibold">
									<FadeTextReveal text={"Unusual Mind (2025)"} />
								</h4>
								<div className="mt-2">
									<FadeRevealParagraph
										paragraphs={[
											`An immersive, introspective journey into the psyche, Unusual Mind visualizes a passage through the darkest and most luminous parts of mental space. From shadowy realms filled with creatures and demons to rare moments of serenity, the film explores the tension between inner darkness and the longing for peace. A powerful visual metaphor for the complexity of human consciousness and emotional struggle.`
										]}
									/>
								</div>
								<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-base leading-relaxed">
									<ButtonBlue
										title={<>Watch Film Here</>}
										href={"https://youtu.be/_xJd7ZvUFc4?si=GA5onEsLdznPnSOo"}
										containerClass={"flex-center gap-1 mx-auto sm:mx-0"}
									/>
									<ButtonBlue
										title={<>Official Selections</>}
										onClick={() => setShowImages((prev) => !prev)}
										containerClass={"flex-center gap-1 mx-auto sm:mx-0"}
									/>
								</div>

								{/* Smooth Reveal for Laurels */}
								<AnimatePresence>
									{showImages && (
										<motion.div
											initial={{ opacity: 0, height: 0, y: -10 }}
											animate={{ opacity: 1, height: "auto", y: 0 }}
											exit={{ opacity: 0, height: 0, y: -10 }}
											transition={{ duration: 0.5, ease: "easeInOut" }}
											className="overflow-hidden w-full"
										>
											<div className="mt-12 grid grid-cols-1  sm:grid-cols-3 gap-8 w-full max-w-4xl items-center justify-items-center justify-center mx-auto">
												<img src="img/2025_ADAF_LAURELS_blackTRans.png" alt="Official Selection adaf 2025" className="w-1/2 sm:w-full h-auto object-contain" />
												<img
													src="img/CFF-14KOTINOS-1.png"
													alt="Official Selection chania film festival 2026"
													className="w-1/2 sm:w-full h-auto object-contain"
												/>
												<img
													src="img/Official_Selection_animasyros_2026.png"
													alt="Official Selection animasyros 2026"
													className="w-1/2 sm:w-full h-auto object-contain"
												/>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>

						{/* Right Image Section */}
						<div className="lg:w-2/3 flex justify-center">
							<LiquidImageReveal src="img/about-1.webp" alt="Artwork" className="w-full rounded-xl object-cover bg-transparent" width={450} height={750} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
