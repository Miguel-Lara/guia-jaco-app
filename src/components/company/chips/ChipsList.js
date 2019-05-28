import React from 'react';
import { Link } from 'react-router-dom';

const ChipsList = props => {
  const _class =
    props.color === 'secundary' ? 'Chip sec-bg-color' : 'Chip main-bg-color';

  return (
    <div className="ChipsContainer">
      {props.items.map(item => (
        <Link key={item.id} className={_class} to={props.link + '/' + item.id}>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default ChipsList;
