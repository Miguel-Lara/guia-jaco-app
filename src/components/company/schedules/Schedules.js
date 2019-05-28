import React from 'react';

const Schedules = props => {
  return props.data.map((element, index) => {
    const dom = element.hours.map((hour, i) => <p key={'h-' + i}>{hour}</p>);

    return (
      <div key={index}>
        <h4>{element.days}</h4>
        {dom}
      </div>
    );
  });
};

export default Schedules;
