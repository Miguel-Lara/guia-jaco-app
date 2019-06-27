import React from 'react';
import { CarouselProvider, DotGroup } from 'pure-react-carousel';
import FeaturedSlider from './FeaturedSlider';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../../css/pure-react-carousel.css';

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

Featured.propTypes = {
  items: PropTypes.array
};

export default Featured;
