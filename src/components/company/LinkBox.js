import React from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { ButtonBase, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  a: {
    display: 'flex',
    width: '100%',
    minHeight: 100,
    marginBottom: 1
  },
  button: {
    width: '100%',
    minHeight: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

const LinkBox = props => {
  const { link, title, value } = props.data;
  const { a, button } = styles;
  return (
    <a href={link} style={a} target="_blank" rel="noopener noreferrer">
      <ButtonBase style={button}>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body1">{value}</Typography>
        <ChevronRight />
      </ButtonBase>
    </a>
  );
};

LinkBox.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinkBox;
