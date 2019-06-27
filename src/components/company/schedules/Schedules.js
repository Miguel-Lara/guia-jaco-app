import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

/* 
  Expected data format:
  props.data = [
      {
        "days": "Lunes a Viernes",
        "hours": ["De 9:30 a 12:30", "De 15:00 a 18:00"]
      },
      {
        "days": "Sabado",
        "hours": ["De 9:30 a 12:3"]
      },
      {
        "days": "Domingo y Feriados",
        "hours": ["Cerrado"]
      }
    ],
*/

const Schedules = ({ data }) => {
  return data.map((item, index) => {
    const dom = item.hours.map((hour, i) => (
      <Typography variant="body2" key={'h-' + i}>
        {hour}
      </Typography>
    ));

    return (
      <div key={index}>
        <Typography variant="h3">{item.days}</Typography>
        {dom}
      </div>
    );
  });
};

Schedules.propTypes = {
  data: PropTypes.array.isRequired
};

export default Schedules;
