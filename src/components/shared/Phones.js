import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Layout from '../shared/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Phones = ({ items }) => (
  <div>
    <Divider />
    <Layout>
      <Typography variant="h1">Teléfonos útiles</Typography>
      <List>
        {items.map(({ id, label, value }) => (
          <div key={id}>
            <ListItem>
              <Avatar>
                <PhoneIcon />
              </Avatar>
              <ListItemText primary={label} secondary={value} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Layout>
  </div>
);

Phones.propTypes = {
  items: PropTypes.array.isRequired
};

export default Phones;
