import React from 'react';
import Footer from '../shared/Footer';
import Layout from '../shared/Layout';
import PageTitle from '../shared/PageTitle';
import { Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const Page404 = props => (
  <div>
    <PageTitle title="Guía Jaco. Página no encontrada." />
    <Layout>
      <Typography variant="h1">Ups! La página que buscas no existe</Typography>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        onClick={() => {
          props.history.push('/');
        }}
        style={{
          marginBottom: 150
        }}
      >
        Ir al inicio
      </Button>
    </Layout>
    <Footer />
  </div>
);

export default withRouter(Page404);
