import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import '../../css/SimpleSearch.css';

const SimpleSearch = props => {
  return (
    <div className="SimpleSearch">
      <Paper className="Paper">
        <InputBase className="InputBase" placeholder="Rubros, productos..." />
        <IconButton aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SimpleSearch;
