import React from 'react';
import PropTypes from 'prop-types';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  color: 'white'
};

const ExternalLink = ({ children, link }) => {
  return (
    <a href={link} style={style} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired
};

export default ExternalLink;
