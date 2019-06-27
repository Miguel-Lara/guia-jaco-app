import React from 'react';
import { Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const styles = {
  chip: {
    margin: '0 5px 5px 0'
  }
};

const ChipsList = ({ color, history, items, link }) => {
  const { chip } = styles;

  return (
    <div>
      {items.map(item => (
        <Chip
          key={item.id}
          color={color === 'main' ? 'primary' : 'secondary'}
          label={item.title}
          onClick={() => history.push(`/buscar/${link}/${item.string_id}/asc/0`)}
          style={chip}
        />
      ))}
    </div>
  );
};

ChipsList.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default withRouter(ChipsList);
