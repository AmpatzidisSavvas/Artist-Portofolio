import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const ThreeDCarousel = ({ slides }) => {
	const [selectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		if (!selectedImage) return;

		const handleKeyDown = (e) => {
			if (e.key === "Escape") {
				setSelectedImage(null);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [selectedImage]);

	const [sliderRef, slider] = useKeenSlider({
		loop: true,
		mode: "snap",
		rubberband: true,

		// MOBILE (slight preview)
		slides: {
			perView: 1.15,
			spacing: 14
		},

		// TABLET+ (NO preview, centered image)
		breakpoints: {
			"(min-width: 768px)": {
				slides: {
					perView: 1,
					spacing: 24
				}
			}
		}
	});

	const handlePrev = () => slider.current?.prev();
	const handleNext = () => slider.current?.next();

	return (
		<>
			<section className="relative w-full max-w-[1920px] mx-auto">
				{/* Left control */}
				<div className="hidden sm:block absolute top-1/2 left-3 z-20 -translate-y-1/2">
					<button onClick={handlePrev} className="transition hover:scale-110 active:scale-95">
						<FontAwesomeIcon icon={faCircleArrowLeft} size="2x" className="text-white bg-black/40 rounded-full backdrop-blur-sm" />
					</button>
				</div>

				{/* Right control */}
				<div className="hidden sm:block absolute top-1/2 right-3 z-20 -translate-y-1/2">
					<button onClick={handleNext} className="transition hover:scale-110 active:scale-95">
						<FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="text-white bg-black/40 rounded-full backdrop-blur-sm" />
					</button>
				</div>

				{/* Slider */}
				<div ref={sliderRef} className="keen-slider px-4 md:px-0">
					{slides.map((src, index) => (
						<div key={index} className="keen-slider__slide">
							<button
								onClick={() => setSelectedImage(src)}
								className="
									group
									w-full
									p-[3px]
									rounded-3xl
									bg-gradient-to-br
									from-white/10
									via-white/5
									to-white/10
									sm:from-white/25
									sm:via-white/10
									sm:to-white/25
									lg:bg-none
									lg:p-0
									transition-all
									duration-500
								"
							>
								<div className="overflow-hidden rounded-[22px] bg-neutral-900">
									<img
										src={src}
										alt={`Slide ${index + 1}`}
										loading="lazy"
										className="
											w-full
											aspect-[16/9]
											object-cover
											transition-transform
											duration-700
											group-hover:scale-105
										"
									/>
								</div>
							</button>
						</div>
					))}
				</div>

				{/* Mobile hint */}
				<div className="sm:hidden flex justify-center mt-4">
					<div className="flex gap-1">
						<div className="w-8 h-1 rounded-full bg-black/80" />
						<div className="w-2 h-1 rounded-full bg-black/30" />
						<div className="w-2 h-1 rounded-full bg-black/30" />
					</div>
				</div>
			</section>

			{/* Lightbox */}
			{selectedImage && (
				<div
					className="
						fixed inset-0 z-50
						bg-black/90
						backdrop-blur-sm
						flex items-center justify-center
						p-4
					"
					onClick={() => setSelectedImage(null)}
				>
					<button className="absolute top-4 right-4 text-white text-2xl z-50" onClick={() => setSelectedImage(null)}>
						<FontAwesomeIcon icon={faXmark} />
					</button>

					<img
						src={selectedImage}
						alt="Preview"
						className="
							max-w-full
							max-h-[90vh]
							object-contain
							rounded-2xl
							shadow-2xl
						"
						onClick={(e) => e.stopPropagation()}
					/>
				</div>
			)}
		</>
	);
};

export default ThreeDCarousel;
