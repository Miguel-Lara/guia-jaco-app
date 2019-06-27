import React from 'react';
import Form from '../shared/form/Form';
import Footer from '../shared/Footer';
import Layout from '../shared/Layout';
import PageTitle from '../shared/PageTitle';

const Contact = () => (
  <div>
    <Layout>
      <PageTitle title="Guía Jaco. Contacto." />
    </Layout>
    <Form type="contact" title="Contacto" />
    <Footer />
  </div>
);

export default Contact;
