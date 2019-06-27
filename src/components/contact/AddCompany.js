import React from 'react';
import { Typography } from '@material-ui/core';
import Form from '../shared/form/Form';
import Footer from '../shared/Footer';
import Layout from '../shared/Layout';
import PageTitle from '../shared/PageTitle';

const AddCompany = () => (
  <div>
    <Layout>
      <PageTitle title="Guía Jaco. Alta de empresa." />
      <div>
        <Typography variant="h1">
          Quiero agregar mi negocio a Guía Jaco
        </Typography>
        <Typography variant="body2">
          Si usted desea agregar su negocio a Guía Jaco puede hacerlo de forma
          totalmente gratuita.
        </Typography>
        <Typography variant="body2">
          Puede llamarnos al teléfono &nbsp;
          <a href="tel:0294-15-4-666666" rel="noopener noreferrer">
            0294-15-4-666666
          </a>
          . De Lunes a Viernes, de 9 a 18hs.
        </Typography>
        <Typography variant="body2">
          Puede enviarnos un email con sus datos a &nbsp;
          <a href="mailto:alta@guiajaco.com.ar" rel="noopener noreferrer">
            alta@guiajaco.com.ar
          </a>
          .
        </Typography>
      </div>
    </Layout>
    <Form type="add_company" title="Formulario de alta" />
    <Footer />
  </div>
);

export default AddCompany;
