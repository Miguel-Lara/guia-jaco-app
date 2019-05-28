import React from 'react';
import { Image, Slide, Slider } from 'pure-react-carousel';
import { NavLink } from 'react-router-dom';
import FeaturedChips from './FeaturedChips';

const FeaturedSlider = props => {
  return (
    <Slider>
      {props.items.map((element, i) => (
        <Slide key={element.company_id} index={i}>
          <div className="SliderContent">
            <FeaturedChips items={element.categories} />
            <div className="SliderTitleChip main-bg-color">
              <h2>{element.title}</h2>
              <p>{element.description}</p>
            </div>
          </div>
          <NavLink to="/empresa/abc123">
            <Image alt={element.title} src={element.image_path} />
          </NavLink>
        </Slide>
      ))}
    </Slider>
  );
};

export default FeaturedSlider;
