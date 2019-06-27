import React from 'react';
import Layout from './Layout';
import { Button, Typography } from '@material-ui/core';

const ApiError = () => (
  <Layout>
    <Typography variant="h1" color="error">
      Ocurrió un error al cargar la app.
    </Typography>
    <br />
    <Button
      fullWidth
      className="main-bg-color"
      variant="contained"
      onClick={() => window.location.reload()}
    >
      Reintentar
    </Button>
  </Layout>
);

export default ApiError;
