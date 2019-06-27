import React from 'react';
import { Typography } from '@material-ui/core';
import Form from '../shared/form/Form';
import Footer from '../shared/Footer';
import Layout from '../shared/Layout';
import PageTitle from '../shared/PageTitle';

const Advertising = () => (
  <div>
    <Layout>
      <PageTitle title="Guía Jaco. Publicitar." />
      <Typography variant="h1">¿Le interesa publicitar?</Typography>
      <Typography variant="body2">
        Si desea publicitar su negocio, local, empresa o emprendimiento, tenemos
        planes accesibles. Lo contactaremos sin compromiso.
      </Typography>
      <Typography variant="body2">
        <a href="tel:0294-15-4-666666" rel="noopener noreferrer">
          0294-15-4-666666
        </a>
        . De Lunes a Viernes, de 9 a 18hs
      </Typography>
      <Typography variant="body2">
        <a href="mailto:publicidad@guiajaco.com.ar" rel="noopener noreferrer">
          publicidad@guiajaco.com.ar
        </a>
      </Typography>
      <br />
    </Layout>
    <Form type="advertising" title="Publicitar en Guía Jaco" />
    <Footer />
  </div>
);

export default Advertising;
