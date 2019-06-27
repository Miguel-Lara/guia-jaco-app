import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const TextBox = ({ title, text }) => (
  <div>
    <Divider />
    <Typography variant="h3" color="secondary">{title}</Typography>
    <Typography variant="body2">{text}</Typography>
  </div>
);

TextBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default TextBox;
