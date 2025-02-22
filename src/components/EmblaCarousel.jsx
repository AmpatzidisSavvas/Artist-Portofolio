import React from 'react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './usePrevNextButtons'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay
} from './useSelectedSnapDisplay'
import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi)

  return (
    <section className="embla">
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="embla__slide__img"
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmblaCarousel
