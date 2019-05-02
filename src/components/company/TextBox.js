import React from 'react';
import Divider from '@material-ui/core/Divider';

const TextBox = props => {
  return (
    <div>
      <Divider />
      <h4>
        <span className="sec-color">{props.title}</span>
      </h4>
      <p>{props.text}</p>
    </div>
  );
};

export default TextBox;
