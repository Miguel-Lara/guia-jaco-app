import React from 'react';
import { ButtonBase, Typography } from '@material-ui/core';
import { Image, Slide, Slider } from 'pure-react-carousel';
import { Link, NavLink } from 'react-router-dom';
import FeaturedChips from './FeaturedChips';
import PropTypes from 'prop-types';

const styles = {
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  },
  button: {
    margin: 0,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  subtitle1: {
    paddingBottom: 10
  }
};

const FeaturedSlider = ({ items }) => {
  return (
    <Slider>
      {items.map((item, i) => {
        const { id, categories, title, short_description, image_path } = item;
        const path = `/empresa/${id}`;
        const { main, button, subtitle1 } = styles;

        return (
          <Slide key={id} index={i}>
            <div style={main}>
              <ButtonBase component={Link} to={path} style={button}>
                <Typography variant="subtitle1" style={subtitle1}>
                  {title}
                </Typography>
                <Typography variant="subtitle2">{short_description}</Typography>
              </ButtonBase>
              <FeaturedChips items={categories} section="rubros" />
            </div>
            <NavLink to={path}>
              <Image alt={title} src={image_path} tag="div" isBgImage />
            </NavLink>
          </Slide>
        );
      })}
    </Slider>
  );
};

FeaturedSlider.propTypes = {
  items: PropTypes.array.isRequired
};

export default FeaturedSlider;
