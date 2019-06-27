import React from 'react';
import Layout from '../../shared/Layout';
import ShareBoxItem from './ShareBoxItem';
import { Typography } from '@material-ui/core';

const styles = {
  main: {
    background: '#444',
    textAlign: 'center'
  },
  h1: {
    color: 'white'
  }
};

const data = [
  {
    type: 'whatsapp',
    title: 'Compartir en Whatsapp'
  },
  {
    type: 'facebook',
    title: 'Compartir en Facebook'
  }
];

const ShareBox = ({ url }) => {
  const { main, h1 } = styles;

  return (
    <div style={main}>
      <Layout>
        <Typography variant="h1" style={h1}>
          Compartir este comercio
        </Typography>
        {data.map(item => (
          <ShareBoxItem key={item.type} {...item} url={url} />
        ))}
      </Layout>
    </div>
  );
};

export default ShareBox;
