import React from 'react';
import { CarouselProvider, DotGroup } from 'pure-react-carousel';
import FeaturedSlider from './FeaturedSlider';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../../css/Featured.css';

const Featured = props => {
  const settings = {
    isPlaying: true,
    naturalSlideWidth: 100,
    naturalSlideHeight: 100,
    totalSlides: props.items.length
  };

  return (
    <div>
      <CarouselProvider {...settings}>
        <FeaturedSlider items={props.items} />
        <DotGroup className="DotGroup" />
      </CarouselProvider>
    </div>
  );
};

export default Featured;
