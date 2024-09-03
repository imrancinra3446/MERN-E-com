import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import camera from '../../images/hero/camera.jpg'
import earphone from '../../images/hero/earphone.jpg'
import smartwatch from '../../images/hero/smartwatch.jpg'

const items = [
  {
    src: camera,
    caption: 'Polaroid Camera',
    altText: 'Price: 22000/-',
    key: 1,
  },
  {
    src: earphone,
    caption: 'Apple Airpods Pro',
    altText: 'Price: 5000/-',
    key: 2,
  },
  {
    src: smartwatch,
    caption: 'Apple Smartwatch',
    altText: 'Price: 12000/-',
    key: 3,
  },
];

const CarouselHero = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}

      >
        <img src={item.src} alt={item.altText} style={{ maxHeight: 500 }} className='d-block img-fluid w-100' />
        <CarouselCaption
          className='capt'
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className='text-center'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      fade
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
      className=' carousel-dark'
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
      className=' carousel-dark'
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselHero;