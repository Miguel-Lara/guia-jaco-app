import React from 'react';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo-footer.png';

const FormResult = props => {
  const ErrorMessage = () => {
    return (
      <div>
        <h1>Formulario enviado con éxito.</h1>
        <p>Gracias por contactarnos.</p>
        <p>Nos comunicaremos con Usted a la brevedad.</p>
        <img alt="Guia Jaco. Contacto." src={logo} />
      </div>
    );
  };

  const SuccessMessage = () => {
    return (
      <div>
        <h1>Por favor inténtelo de nuevo</h1>
        <p>Algo sucedió al intentar enviar su mensaje</p>
        <Button>Enviar de nuevo</Button>
      </div>
    );
  };

  const Message = () => {
    if (props.result === 'success') {
      return <SuccessMessage />;
    }
    return <ErrorMessage />;
  };

  return (
    <div className="ContentBox">
      <Message />
    </div>
  );
};

export default FormResult;
