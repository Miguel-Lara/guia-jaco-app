import React from 'react';
import PropTypes from 'prop-types';

const MessageEmpty = ({show}) => {
  if (!show) {
    return <div>No se encontraron resultados</div>;
  }
  return null;
};

MessageEmpty.propTypes = {
  link: PropTypes.bool
};

export default MessageEmpty;
