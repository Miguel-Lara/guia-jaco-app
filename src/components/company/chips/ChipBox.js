import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChipsList from './ChipsList';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const ChipBox = ({ link, color, items, title }) => {
  return (
    <div>
      <Divider />
      <Typography variant="h3" color="secondary">
        {title}
      </Typography>
      <ChipsList color={color} link={link} items={items} />
    </div>
  );
};

ChipBox.propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string,
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default ChipBox;
