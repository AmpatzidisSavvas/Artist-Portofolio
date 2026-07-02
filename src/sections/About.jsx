import { useEffect, useRef } from "react";
import AnimatedTitle from "../components/shared/AnimatedTitle";
import FadeRevealParagraph from "../components/shared/FadeRevealParagraph";
import FadeTextReveal from "../components/shared/FadeTextReveal";
import ButtonBlue from "../components/ui/ButtonBlue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
	const festivalContainerRef = useRef(null);

	useEffect(() => {
		if (!festivalContainerRef.current) return;

		let ctx = gsap.context(() => {
			gsap.fromTo(
				festivalContainerRef.current.children,
				{ x: 80, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.7,
					stagger: 0.12,
					ease: "power2.out",
					scrollTrigger: {
						trigger: festivalContainerRef.current,
						start: "top 85%",
						end: "bottom 15%",
						toggleActions: "play reverse play reverse"
					}
				}
			);
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
							{/* Filmography Section */}
							<div className=" rounded-xl p-6 ">
								<div className="mb-8">
									<FadeRevealParagraph
										paragraphs={[
											`Savvas “The Pack” Ampatzidis is a self-taught multidisciplinary designer based in Thessaloniki, Greece.`,
											`His work is deeply rooted in storytelling, blending violence, romance, chaos, and beauty into rich visual narratives.These stories reflect the raw, often contradictory nature of life. Using a mix of 2D and 3D techniques, Using a mix of 2D and 3D techniques, he creates striking, he creates striking, layered visuals
									that invite viewers to look beneath the surface. His artistic range spans multiple mediums, evolving across disciplines while maintaining a
									strong personal voice.`,
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
											`An immersive, introspective journey into the psyche, Unusual Mind visualizes a passage through the darkest and most luminous parts of
									mental space. From shadowy realms filled with creatures and demons to rare moments of serenity, the film explores the tension between inner
									darkness and the longing for peace. A powerful visual metaphor for the complexity of human consciousness and emotional struggle.`
										]}
									/>
								</div>
								<div className="mt-8 text-base leading-relaxed">
									<ButtonBlue
										title={<>Watch Film Here</>}
										href={"https://youtu.be/_xJd7ZvUFc4?si=GA5onEsLdznPnSOo"}
										containerClass={"flex-center gap-1 mx-auto sm:mx-0"}
									/>
								</div>

								{/* Festival Selections */}
								<div className="mt-8 space-y-3">
									<h4 className="text-xl font-semibold mb-5">
										<FadeTextReveal text={`Festival Official Selections`} />
									</h4>
									<div ref={festivalContainerRef} className="mt-8 space-y-3">
										<div className="border-l-4 border-r-4 border-blue-400 md:border-r-0 p-3 md:pl-4 ">Athens Digital Arts Festival ADAF (2025)</div>

										<div className="border-l-4 border-r-4 border-blue-400 md:border-r-0 p-3 md:pl-4">CINERGO International Film Festival (2025)</div>

										<div className="border-l-4 border-r-4 border-blue-400 md:border-r-0 p-3 md:pl-4">
											KINOdiseea International Children Film Festival Romania (2025)
										</div>

										<div className="border-l-4 border-r-4 border-blue-400 md:border-r-0 p-3 md:pl-4">Festival Miden (2026)</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Image Section */}
						<div className="lg:w-1/3 flex justify-center">
							<img src="img/about-1.webp" alt="Artwork" className="w-full max-w-sm rounded-xl shadow-2xl object-cover transition-transform duration-500" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
