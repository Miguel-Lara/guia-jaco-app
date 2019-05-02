import React from 'react';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import '../../css/ChipBox.css';

const ChipBox = props => {
  //
  // Define color:
  let _bgClass = 'Chip main-bg-color';
  let _class = 'main-color';
  if (props.color === 'secundary') {
    _bgClass = 'Chip sec-bg-color';
    _class = 'sec-color';
  }

  // Helper to create chips:
  const createItems = data =>
    data.map((item, index) => (
      <Link key={index} className={_bgClass} to={props.link + '/' + item.id}>
        <span>{item.label}</span>
      </Link>
    ));

  return (
    <div
      style={{
        position: 'relative',
        float: 'left',
        width: '100%',
        marginTop: '10px'
      }}
    >
      <Divider />
      <h4 className="ChipTitle">
        <span className={_class}>{props.title}</span>
      </h4>
      <div className="ChipsContainer">{createItems(props.items)}</div>
    </div>
  );
};

export default ChipBox;
