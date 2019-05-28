import React from 'react';
import Radio from '@material-ui/core/Radio';

const FilterBoxItem = props => {
  const { id, onClick, checked, label } = props;

  return (
    <div key={id} onClick={() => onClick(id)} className="ItemDiv">
      <Radio checked={checked} className="Radio" />
      <div className="Label">{label}</div>
    </div>
  );
};

export default FilterBoxItem;
