import React from 'react';

const ChipTitle = props => {
  const _class = props.color === 'secundary' ? 'sec-color' : 'main-color';

  return (
    <h4 className="ChipTitle">
      <span className={_class}>{props.title}</span>
    </h4>
  );
};

export default ChipTitle;
