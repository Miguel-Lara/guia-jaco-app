import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PhoneIcon from '@material-ui/icons/Phone';

import '../../css/MainLayout.css';

const Phones = props => {
  const buildItems = data => {
    return data.map(element => {
      return (
        <div key={element.id}>
          <ListItem>
            <Avatar className="PhoneAvatar">
              <PhoneIcon />
            </Avatar>
            <ListItemText primary={element.label} secondary={element.value} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  };

  return (
    <div>
      <Divider />
      <div className="ContentBox">
        <h1>
          <span className="main-color">Teléfonos útiles</span>
        </h1>
        <List>{buildItems(props.items)}</List>
      </div>
    </div>
  );
};

export default Phones;
