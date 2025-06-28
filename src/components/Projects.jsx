import React from "react";
import Card from "./Card";
import AnimatedTitle from "./AnimatedTitle";
import TopCarousel from "./TopCarousel";
import SmallCard from "./SmallCard";

const OPTIONS = [
	"img/1.webp",
	"img/2.webp",
	"img/3.webp",
	"img/4.webp",
	"img/5.webp",
	"img/6.webp",
	"img/7.webp",
	"img/8.webp",
	"img/9.webp",
	"img/10.webp",
	"img/11.webp",
	"img/12.webp"
];

const Projects = () => {
	return (
		<section id="work" className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-5 py-10">
					<AnimatedTitle title="3d animations" containerClass="mt-5 !text-yellow-300 text-center !text-6xl" />
					<AnimatedTitle title="Visuals" containerClass="mt-5 !text-yellow-300 text-center !text-6xl" />
				</div>

				<div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
					<Card
						src="videos/feature-1.mp4"
						title={<>"dialleima"</>}
						description={<>3D animated music video for the artist "Agrimi". showcasing a dynamic blend of visuals and music.</>}
						titleButton="Watch full video"
						href="https://www.youtube.com/watch?v=57m9Sb6Nk4M"
					/>
				</div>

				<div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
					<div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
						<Card title={<>creatures</>} description={<>Creatures from my animated short film "Unusual Mind"</>} src="videos/feature-2.mp4" />
					</div>
					<div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<Card src={"videos/feature-3.mp4"} />
					</div>
					<div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
						<Card
							title={<>"go-ship"</>}
							description={<>3D animated music video for the artist "Silent"</>}
							src={"videos/feature-4.mp4"}
							titleButton="Watch full video"
							href="https://www.youtube.com/watch?v=kZOZSruDpRw"
						/>
					</div>
					{/* Double small cards */}

					<SmallCard src={"videos/feature-5.mp4"} />
					<SmallCard src={"videos/feature-6.mp4"} />
				</div>

				<div className="border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
					<Card
						src="videos/hero-1.mp4"
						title={<>"Unusual Mind"</>}
						description={<>Scene from my animated short film "Unusual Mind" 2024</>}
						titleButton="Watch teaser here"
						href="https://vimeo.com/1023495298"
					/>
				</div>

				<div className="grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7">
					{/* Double small cards */}
					<SmallCard src={"videos/feature-8.mp4"} />
					<SmallCard src={"videos/feature-9.mp4"} />
				</div>

				<div className="border-hsla relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] ">
					<Card src="videos/feature-7.mp4" title={<>"Balkanoia"</>} titleButton="Watch full video" href="https://vimeo.com/1045778818" />
				</div>

				<div className="grid  grid-cols-1 md:grid-cols-2 mt-7 gap-7">
					<SmallCard src={"videos/feature-10.mp4"} />
					{/* <SmallCard src={"videos/feature-11.mp4"} /> */}
				</div>
			</div>
			<div className="px-5 py-10">
				<AnimatedTitle title="2d Illustrations" containerClass="mt-5 mb-10 !text-pink-300 text-center !text-6xl" />
				<p className="mb-10 font-general text-[15px] uppercase text-white text-center">Scroll right and left to see more</p>

				<TopCarousel slides={OPTIONS} />
			</div>
		</section>
	);
};

export default Projects;
