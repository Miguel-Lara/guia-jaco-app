import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    marginLeft: 10
  }
};

const Phones = ({ data }) => {
  const { main, button } = styles;

  return data.map((number, index) => (
    <div key={index} style={main}>
      <Typography variant="body2">{number}</Typography>

      <div className="spacer" />

      <a href={'tel:' + number}>
        <Button variant="contained" size="small" color="primary" style={button}>
          Llamar&nbsp;&nbsp;
          <PhoneIcon fontSize="small" />
        </Button>
      </a>
      <p />
    </div>
  ));
};

Phones.propTypes = {
  data: PropTypes.array.isRequired
};

export default Phones;
