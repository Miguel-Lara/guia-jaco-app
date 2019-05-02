import React, { Component } from 'react';
import {
  CarouselProvider,
  DotGroup,
  Image,
  Slider,
  Slide
} from 'pure-react-carousel';
import { NavLink } from 'react-router-dom';

import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../css/Featured.css';

class Featured extends Component {
  buildChips(_categories) {
    return (
      <div className="ChipContainer">
        {_categories.map((category, index) => (
          <NavLink key={index} to={'/categorias/' + category.id}>
            <p className="SliderChip sec-bg-color">{category.label}</p>
          </NavLink>
        ))}
      </div>
    );
  }

  buildSlides() {
    return this.props.items.map((element, i) => (
      <Slide key={element.company_id} index={i}>
        <div className="SliderContent">
          {this.buildChips(element.categories)}
          <div className="SliderTitleChip main-bg-color">
            <h2>{element.title}</h2>
            <p>{element.description}</p>
          </div>
        </div>
        <NavLink to="/empresa/abc123">
          <Image alt={element.title} src={element.image_path} />
        </NavLink>
      </Slide>
    ));
  }

  render() {
    return (
      <div>
        <CarouselProvider
          isPlaying={true}
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={this.props.items.length}
        >
          <Slider>{this.buildSlides()}</Slider>
          <DotGroup className="DotGroup" />
        </CarouselProvider>
      </div>
    );
  }
}

export default Featured;
