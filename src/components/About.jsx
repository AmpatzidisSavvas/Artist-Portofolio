import React from "react";
import AnimatedTitle from "./AnimatedTitle";

const About = () => {
	return (
		<div id="about" className="my-20 min-h-96 w-screen  px-10">
			<div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
				<div className="flex flex-col items-center text-center">
					<div className="mb-10">
						<AnimatedTitle title="About" className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]" />
					</div>

					<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 max-w-6xl mx-auto px-4">
						<div className="lg:w-2/3 space-y-6 ">
							<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
								Savvas “The Pack” Ampatzidis is a self-taught multidisciplinary designer based in Thessaloniki, Greece. His work is deeply rooted in
								storytelling—blending violence, romance, chaos, and beauty into rich visual narratives. These stories reflect the raw, often contradictory
								nature of life.
							</p>
							<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
								Using a mix of 2D and 3D techniques, he creates striking, layered visuals that invite viewers to look beneath the surface. His artistic range
								spans multiple mediums, evolving across disciplines while maintaining a strong personal voice.
							</p>
							<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
								His work has been exhibited internationally and featured at festivals dedicated to illustration, comics, and animation.
							</p>
							<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
								<span className="font-semibold underline">Filmography</span>
							</p>
							<p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
								<strong>Unusual Mind (2024)</strong>
								<br />
								An immersive, introspective journey into the psyche, <em>Unusual Mind</em> visualizes a passage through the darkest and most luminous parts of
								mental space. From shadowy realms filled with creatures and demons to rare moments of serenity, the film explores the tension between inner
								darkness and the longing for peace. A powerful visual metaphor for the complexity of human consciousness and emotional struggle.
								<br />
								<br />
								<strong>Festival Selections:</strong>
								<br />
								Athens Digital Arts Festival ADAF (2025)-- <em>Official Selection</em>
								<br />
								CINERGO International Film Festival (2025)-- <em>Official Selection</em>
							</p>
						</div>
						<img src="img/about-1.webp" alt="Artwork" className="w-full lg:w-1/3 max-w-sm rounded-xl shadow-lg object-cover" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
