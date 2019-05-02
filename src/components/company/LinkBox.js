import React from 'react';
import Divider from '@material-ui/core/Divider';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { ButtonBase } from '@material-ui/core';

import '../../css/DataBox.css';

const LinkBox = props => {
  return (
    <a href={props.data.link} target="_blank" rel="noopener noreferrer">
      <Divider />
      <ButtonBase className="DataBox">
        <span className="Left main-color">
          <h3>{props.data.title}</h3>
        </span>
        <span
          className="Right"
          style={{
            display: 'flex',
            flexGrow: '1'
          }}
        >
          <div className="InlineTextIcon">
            <p>{props.data.value}</p>
            <span className="spacer" />
            <ChevronRight />
          </div>
        </span>
      </ButtonBase>
    </a>
  );
};
export default LinkBox;
