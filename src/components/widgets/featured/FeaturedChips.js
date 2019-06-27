import React from 'react';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const FeaturedChips = ({ items, section, history }) => (
  <div>
    {items.map(({ id, string_id, title }) => (
      <Chip
        key={id}
        color="secondary"
        label={title}
        onClick={() => history.push(`/buscar/rubro/${string_id}/asc/0`)}
      />
    ))}
  </div>
);

FeaturedChips.propTypes = {
  items: PropTypes.array.isRequired,
  section: PropTypes.string.isRequired
};

export default withRouter(FeaturedChips);
