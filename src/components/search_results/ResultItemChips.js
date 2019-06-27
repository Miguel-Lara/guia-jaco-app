import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

const styles = {
  main: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  item: {
    fontSize: 12,
    padding: 5,
    margin: '0 5px 5px 0',
    width: 'auto',
    background: '#f3f3f3'
  }
};

const ResultItemChips = ({ history, items, section, type }) => (
  <div style={styles.main}>
    {items.map((item, i) => {
      const path = `/buscar/${section}/${item.string_id}/asc/0`;

      return (
        <Chip
          key={i}
          size="small"
          color={type === 'main' ? 'primary' : 'secondary'}
          label={item.title}
          onClick={() => history.push(path)}
        />
      );
    })}
  </div>
);

ResultItemChips.propTypes = {
  items: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default withRouter(ResultItemChips);
