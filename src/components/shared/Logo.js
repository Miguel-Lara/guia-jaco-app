import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  header: {
    maxHeight: 40,
    marginTop: 5
  },
  sidenav: {
    margin: 10,
    width: 150,
    height: 'auto'
  },
  footer: {
    maxWidth: 240,
    marginBottom: 30
  }
};

const Logo = ({ type }) => {
  const style = styles[type];
  const image = `${process.env.REACT_APP_IMGS_FOLDER}/logo-${type}.png`;
  return <img alt="Guía Jaco." src={image} style={style} />;
};

Logo.propTypes = {
  type: PropTypes.string.isRequired
};

export default Logo;
