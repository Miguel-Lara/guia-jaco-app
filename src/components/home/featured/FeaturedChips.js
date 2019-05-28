import React from 'react';
import { NavLink } from 'react-router-dom';

const FeaturedChips = props => {
  return (
    <div className="ChipContainer">
      {props.items.map(item => (
        <NavLink key={item.id} to={`buscar/categorías/${item.id}/asc`}>
          <p className="SliderChip sec-bg-color">{item.label}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default FeaturedChips;
