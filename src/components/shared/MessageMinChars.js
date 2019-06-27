import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const MessageMinChars = ({ show }) => {
  if (show) {
    return (
      <Typography variant="caption" color="error">
        Tienes que escribir una palabra de al menos 4 letras
      </Typography>
    );
  }
  return null;
};

MessageMinChars.propTypes = {
  show: PropTypes.bool
};

export default MessageMinChars;
