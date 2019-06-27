import React from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const SideNavMenu = ({ data }) => (
  <List>
    {data.map((item, index) => (
      <ListItem key={index} button component={Link} to={item.link}>
        <ListItemText primary={item.label} />
        <ChevronRight />
      </ListItem>
    ))}
  </List>
);

SideNavMenu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SideNavMenu;
