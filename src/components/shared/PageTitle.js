import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Nested component" />
    </Helmet>
  );
};

export default PageTitle;
