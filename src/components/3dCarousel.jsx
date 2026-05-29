// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

// const ThreeDCarousel = ({ slides }) => {
// 	const [sliderRef, slider] = useKeenSlider({
// 		loop: true,
// 		mode: "snap",
// 		slides: {
// 			perView: 1,
// 			spacing: 10
// 		},
// 		breakpoints: {
// 			"(min-width: 640px)": {
// 				slides: { perView: 1 }
// 			},
// 			"(min-width: 1024px)": {
// 				slides: { perView: 1 }
// 			}
// 		}
// 	});

// 	const handlePrev = () => {
// 		slider.current?.prev();
// 	};

// 	const handleNext = () => {
// 		slider.current?.next();
// 	};

// 	return (
// 		<section className="relative w-full max-w-[1920px] mx-auto px-6">
// 			{/* Controls */}
// 			<div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
// 				<button onClick={handlePrev}>
// 					<FontAwesomeIcon icon={faCircleArrowLeft} size="2x" className="text-black bg-white rounded-2xl border border-white" />
// 				</button>
// 			</div>
// 			<div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
// 				<button onClick={handleNext}>
// 					<FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="text-black bg-white rounded-2xl border border-white" />
// 				</button>
// 			</div>

// 			{/* Carousel */}
// 			<div ref={sliderRef} className="keen-slider">
// 				{slides.map((src, index) => (
// 					<div key={index} className="keen-slider__slide mb-9 rounded-lg flex justify-center">
// 						<img src={src} alt={`Slide ${index + 1}`} className="w-full aspect-[16/9] max-w-[1920px] max-h-[1080px] object-cover rounded-xl" loading="lazy" />
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

// export default ThreeDCarousel;

// import { useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowLeft, faCircleArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

// const ThreeDCarousel = ({ slides }) => {
// 	const [selectedImage, setSelectedImage] = useState(null);

// 	const [sliderRef, slider] = useKeenSlider({
// 		loop: true,
// 		mode: "snap",
// 		rubberband: true,

// 		slides: {
// 			perView: 1.15,
// 			spacing: 14
// 		},

// 		breakpoints: {
// 			"(min-width: 768px": {
// 				perView: 1,
// 				spacing: 24
// 			},

// 			"(min-width: 1024px)": {
// 				slides: {
// 					perView: 1,
// 					spacing: 24
// 				}
// 			}
// 		}
// 	});

// 	const handlePrev = () => {
// 		slider.current?.prev();
// 	};

// 	const handleNext = () => {
// 		slider.current?.next();
// 	};

// 	return (
// 		<>
// 			<section className="relative w-full max-w-[1920px] mx-auto">
// 				{/* Controls */}
// 				<div className="hidden sm:block absolute top-1/2 left-3 z-20 -translate-y-1/2">
// 					<button onClick={handlePrev} className="transition hover:scale-110 active:scale-95">
// 						<FontAwesomeIcon icon={faCircleArrowLeft} size="2x" className="text-white bg-black/40 rounded-full backdrop-blur-sm" />
// 					</button>
// 				</div>

// 				<div className="hidden sm:block absolute top-1/2 right-3 z-20 -translate-y-1/2">
// 					<button onClick={handleNext} className="transition hover:scale-110 active:scale-95">
// 						<FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="text-white bg-black/40 rounded-full backdrop-blur-sm" />
// 					</button>
// 				</div>

// 				{/* Carousel */}
// 				<div ref={sliderRef} className="keen-slider px-4 sm:px-6 lg:px-0">
// 					{slides.map((src, index) => (
// 						<div key={index} className="keen-slider__slide">
// 							<button
// 								onClick={() => setSelectedImage(src)}
// 								className="
// 									group
// 									w-full
// 									overflow-hidden
// 									rounded-2xl
// 									shadow-lg
// 									transition-all
// 									duration-500
// 									sm:hover:scale-[1.02]
// 								"
// 							>
// 								<img
// 									src={src}
// 									alt={`Slide ${index + 1}`}
// 									loading="lazy"
// 									className="
// 										w-full
// 										aspect-[16/9]
// 										object-cover

// 										transition-transform
// 										duration-700
// 										group-hover:scale-105
// 									"
// 								/>
// 							</button>
// 						</div>
// 					))}
// 				</div>

// 				{/* Mobile swipe hint */}
// 				<div className="sm:hidden md:hidden flex justify-center mt-4">
// 					<div className="flex gap-1">
// 						<div className="w-8 h-1 rounded-full bg-black/80" />
// 						<div className="w-2 h-1 rounded-full bg-black/30" />
// 						<div className="w-2 h-1 rounded-full bg-black/30" />
// 					</div>
// 				</div>
// 			</section>

// 			{/* Lightbox */}
// 			{selectedImage && (
// 				<div
// 					className="
// 						fixed inset-0 z-50
// 						bg-black/90
// 						backdrop-blur-sm
// 						flex items-center justify-center
// 						p-4
// 						animate-fadeIn
// 					"
// 					onClick={() => setSelectedImage(null)}
// 				>
// 					<button
// 						className="
// 							absolute top-4 right-4
// 							text-white text-2xl
// 							z-50
// 						"
// 						onClick={() => setSelectedImage(null)}
// 					>
// 						<FontAwesomeIcon icon={faXmark} />
// 					</button>

// 					<img
// 						src={selectedImage}
// 						alt="Preview"
// 						className="
// 							max-w-full
// 							max-h-[90vh]
// 							object-contain
// 							rounded-2xl
// 							shadow-2xl
// 							animate-scaleIn
// 						"
// 						onClick={(e) => e.stopPropagation()}
// 					/>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default ThreeDCarousel;

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const ThreeDCarousel = ({ slides }) => {
	const [selectedImage, setSelectedImage] = useState(null);

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
