import React from 'react';
import Button from '@material-ui/core/Button';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const styles = {
  main: {
    padding: '0 30px 30px 30px'
  }
};

const FormResult = ({ callback, success }) => {
  const SuccessMessage = () => (
    <div>
      <div style={styles.main}>
        <Typography variant="h1">¡Formulario enviado con éxito!</Typography>
        <Typography variant="body2">
          Gracias por contactarnos.
          <br />
          Nos comunicaremos con Usted a la brevedad.
        </Typography>
      </div>
      <Footer />
    </div>
  );

  const ErrorMessage = () => (
    <div style={styles.main}>
      <Typography variant="h1" color="error">
        Por favor inténtelo de nuevo
      </Typography>
      <Typography variant="body2" color="error">
        Ocurrió un error al enviar su mensaje
      </Typography>
      <Button fullWidth variant="contained" onClick={callback}>
        Volver a enviar
      </Button>
    </div>
  );

  return success ? <SuccessMessage /> : <ErrorMessage />;
};

FormResult.propTypes = {
  callback: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired
};

export default FormResult;
