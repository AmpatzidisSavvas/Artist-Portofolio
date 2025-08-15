import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const ThreeDCarousel = ({ slides }) => {
	const [sliderRef, slider] = useKeenSlider({
		loop: true,
		mode: "snap",
		slides: {
			perView: 1,
			spacing: 10
		},
		breakpoints: {
			"(min-width: 640px)": {
				slides: { perView: 1 }
			},
			"(min-width: 1024px)": {
				slides: { perView: 1 }
			}
		}
	});

	const handlePrev = () => {
		slider.current?.prev();
	};

	const handleNext = () => {
		slider.current?.next();
	};

	return (
		<section className="relative w-full max-w-[1920px] mx-auto px-6">
			{/* Controls */}
			<div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
				<button onClick={handlePrev}>
					<FontAwesomeIcon icon={faCircleArrowLeft} size="2x" className="text-black bg-white rounded-2xl border border-white" />
				</button>
			</div>
			<div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
				<button onClick={handleNext}>
					<FontAwesomeIcon icon={faCircleArrowRight} size="2x" className="text-black bg-white rounded-2xl border border-white" />
				</button>
			</div>

			{/* Carousel */}
			<div ref={sliderRef} className="keen-slider">
				{slides.map((src, index) => (
					<div key={index} className="keen-slider__slide mb-9 rounded-lg flex justify-center">
						<img src={src} alt={`Slide ${index + 1}`} className="w-full aspect-[16/9] max-w-[1920px] max-h-[1080px] object-cover rounded-xl" loading="lazy" />
					</div>
				))}
			</div>
		</section>
	);
};

export default ThreeDCarousel;
