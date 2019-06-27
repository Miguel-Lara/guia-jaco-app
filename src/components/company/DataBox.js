import React from 'react';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  left: {
    width: '30%',
    marginRight: 10,
    textTransform: 'uppercase'
  }
};

const DataBox = ({ children, title }) => (
  <div>
    <Divider />
    <div style={styles.main}>
      <span style={styles.left}>
        <Typography variant="h3" color="secondary">
          {title}
        </Typography>
      </span>
      <span>{children}</span>
    </div>
  </div>
);

DataBox.propTypes = {
  title: PropTypes.string.isRequired
};

export default DataBox;
