import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '@material-ui/icons/Search';

const SearchButton = ({ history, show }) => {
  if (!show) {
    return null;
  }
  return (
    <Button size="small" onClick={() => history.push('/')}>
      Buscar&nbsp;&nbsp;
      <Search />
    </Button>
  );
};

SearchButton.propTypes = {
  show: PropTypes.bool
};

export default withRouter(SearchButton);
