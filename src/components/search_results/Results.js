import React from 'react';
import PropTypes from 'prop-types';
import ResultItem from './ResultItem';

const Results = ({ data }) => {
  return data.length === 0 ? (
    <div style={{ height: 200 }} />
  ) : (
    <div>
      {data.map((item, i) => (
        <ResultItem key={i} data={item} {...item} />
      ))}
    </div>
  );
};

Results.propTypes = {
  data: PropTypes.array
};

export default Results;
