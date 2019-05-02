import React from 'react';
import Divider from '@material-ui/core/Divider';

import '../../css/DataBox.css';

const DataBox = props => {

  return (
    <div>
      <Divider />
      <div className="DataBox">
        <span className="Left main-color">
          <h3>{props.title}</h3>
        </span>
        <span className="Right">{props.children}</span>
      </div>
    </div>
  );
};
export default DataBox;
