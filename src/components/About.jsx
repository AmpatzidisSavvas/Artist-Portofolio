import AnimatedTitle from "./AnimatedTitle";

const About = () => {
	return (
		<section id="about" className="my-20 min-h-[24rem] w-full px-6 md:px-10">
			<div className="relative rounded-2xl bg-blue-50  py-24 text-black">
				<div className="flex flex-col items-center text-center">
					{/* Title */}
					<div className="mb-12">
						<AnimatedTitle title="About" className="special-font w-full font-zentry text-5xl md:text-7xl font-black text-black leading-[.9]" />
					</div>

					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 max-w-6xl mx-auto px-4">
						{/* Left Text Section */}
						<div className="lg:w-2/3 space-y-6 text-left">
							<p className="text-lg md:text-xl leading-relaxed tracking-wide">
								Savvas “The Pack” Ampatzidis is a self-taught multidisciplinary designer based in Thessaloniki, Greece. His work is deeply rooted in
								storytelling—blending violence, romance, chaos, and beauty into rich visual narratives. These stories reflect the raw, often contradictory
								nature of life.
							</p>
							<p className="text-lg md:text-xl leading-relaxed tracking-wide">
								Using a mix of 2D and 3D techniques, he creates striking, layered visuals that invite viewers to look beneath the surface. His artistic range
								spans multiple mediums, evolving across disciplines while maintaining a strong personal voice.
							</p>
							<p className="text-lg md:text-xl leading-relaxed tracking-wide">
								His work has been exhibited internationally and featured at festivals dedicated to illustration, comics, and animation.
							</p>

							{/* Filmography Section */}
							<div className=" rounded-xl p-6 mt-8 ">
								<h3 className="text-2xl font-bold mb-4">🎬 Filmography</h3>
								<h4 className="text-xl font-semibold">Unusual Mind (2024)</h4>
								<p className="mt-2 text-base leading-relaxed">
									An immersive, introspective journey into the psyche, <em>Unusual Mind</em> visualizes a passage through the darkest and most luminous parts of
									mental space. From shadowy realms filled with creatures and demons to rare moments of serenity, the film explores the tension between inner
									darkness and the longing for peace. A powerful visual metaphor for the complexity of human consciousness and emotional struggle.
								</p>

								{/* Festival Selections */}
								<div className="mt-6 space-y-3">
									<div className="border-l-4 border-blue-400 pl-4">
										Athens Digital Arts Festival ADAF (2025) — <em>Official Selection</em>
									</div>
									<div className="border-l-4 border-blue-400 pl-4">
										CINERGO International Film Festival (2025) — <em>Official Selection</em>
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
