import React from 'react';
import Logo from '../shared/Logo';
import { Typography } from '@material-ui/core';

const styles = {
  p: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
  }
};

const Footer = () => (
  <footer>
    <Logo type="footer" />
    <Typography variant="caption" style={styles.p}>
      © Copyright 2019. Todos los derechos reservados.
    </Typography>
  </footer>
);

export default Footer;
