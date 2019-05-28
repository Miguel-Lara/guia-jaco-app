import React from 'react';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { Link } from 'react-router-dom';

const ButtonBack = props => {
  return (
    <Link className="Back" to={'/home/' + props.word + '/' + props.category}>
      <ChevronLeft />
      <span>Buscar de nuevo</span>
    </Link>
  );
};

export default ButtonBack;
