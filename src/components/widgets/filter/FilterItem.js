import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

const styles = {
  item: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer'
  },
  label: {
    height: 16,
    marginTop: 7
  }
};

const FilterItem = ({ stringId, onClick, checked, label }) => (
  <div onClick={() => onClick(stringId)} style={styles.item}>
    <Radio checked={checked} />
    <div style={styles.label}>{label}</div>
  </div>
);

FilterItem.propTypes = {
  stringId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default FilterItem;
