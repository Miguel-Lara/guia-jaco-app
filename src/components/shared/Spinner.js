import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  main: {
    position: 'absolute',
    marginLeft: '50%',
    left: -20,
    top: 100
  }
};

const Spinner = () => <CircularProgress style={styles.main} />;

export default Spinner;
