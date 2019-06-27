import React from 'react';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const SideNavItem = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Fab size="small" color="primary">
        <FontAwesomeIcon size="lg" icon={icon} />
      </Fab>
    </a>
  );
};

SideNavItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.object
};

export default SideNavItem;
