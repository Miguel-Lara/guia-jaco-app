import React from 'react';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';

const Phones = props => {
  return props.data.map((element, index) => (
    <div key={index} className="ButtonPhone">
      <p>{element.number}</p>
      <div className="spacer" />
      <a href={'tel:' + element.number}>
        <Button variant="outlined" size="small">
          Llamar
          <PhoneIcon fontSize="small" />
        </Button>
      </a>
      <p />
    </div>
  ));
};

export default Phones;
