import React from 'react';
import Footer from '../shared/Footer';
import Layout from '../shared/Layout';

import PageTitle from '../shared/PageTitle';
import { Typography } from '@material-ui/core';

const About = () => (
  <div>
    <PageTitle title="Guía Jaco. Quienes somos." />
    <Layout>
      <Typography variant="h1">Acerca de Guía Jaco</Typography>
      <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
    </Layout>
    <Footer />
  </div>
);

export default About;
