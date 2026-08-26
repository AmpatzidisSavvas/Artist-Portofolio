import { useEffect, useRef, useState } from "react";
import FadeRevealParagraph from "../components/shared/FadeRevealParagraph";
import FadeTextReveal from "../components/shared/FadeTextReveal";
import ButtonBlue from "../components/ui/ButtonBlue";
import gsap from "gsap";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
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
											`Savvas “The Pack” Ampatzidis is a multidisciplinary visual designer and 3D artist based in Thessaloniki, Greece.`,
											`Specializing in advanced Blender 3D and 2D workflows, he crafts immersive visual narratives that explore the raw, contradictory space between beauty, chaos, romance, and violence. His work bridges digital illustration, animation, and world-building—creating layered visuals designed to evoke intrigue beneath the surface.`,
											`Savvas’s work has been exhibited internationally and featured across global illustration, comic, and animation festivals.`
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
											`
"Unusual Mind" is an animated short film that narrates a journey inside an unusual mind.
From the dark and tense depths of the mind inhabited by creatures and demons to the
places where the coveted calmness exists. 
An immersive, introspective experience that
 visualizes the struggle between inner darkness and the pursuit of peace, offering a
mesmerizing exploration of the psyche’s most uncharted realms.`
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
										title={
											<span className="flex items-center gap-1">
												Official Selections
												<span className="font-extrabold text-md">{showImages ? " -" : " ＋"}</span>
											</span>
										}
										onClick={() => setShowImages((prev) => !prev)}
										containerClass={"flex-center gap-1 mx-auto sm:mx-0"}
									/>
								</div>

								<AnimatePresence>
									{showImages && (
										<motion.div
											initial={{ opacity: 0, gridTemplateRows: "0fr" }}
											animate={{ opacity: 1, gridTemplateRows: "1fr" }}
											exit={{ opacity: 0, gridTemplateRows: "0fr" }}
											transition={{ duration: 0.8, ease: easeInOut }}
											style={{ display: "grid" }}
										>
											<div className="overflow-hidden min-h-0 w-full">
												<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl items-center justify-items-center justify-center mx-auto">
													<img
														src="img/2025_ADAF_LAURELS_blackTRans.webp"
														alt="Official Selection adaf 2025"
														width={300}
														height={150}
														loading="eager"
														decoding="async"
														className="w-1/2 sm:w-full h-auto object-contain"
													/>
													<img
														src="img/CFF-14KOTINOS-1.webp"
														alt="Official Selection chania film festival 2026"
														width={300}
														height={150}
														loading="eager"
														decoding="async"
														className="w-1/2 sm:w-full h-auto object-contain"
													/>
													{/* <img
														src="img/Official_Selection_animasyros_2026.webp"
														alt="Official Selection animasyros 2026"
														className="w-1/2 sm:w-full h-auto object-contain"
													/> */}
												</div>
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
