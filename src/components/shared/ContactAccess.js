import React from 'react';
import Button from '@material-ui/core/Button';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

import '../../css/MainLayout.css';

const ContactAccess = props => (
  <div>
    <div className="DetailBox yellow-bg-color">
      <h2>¿Desea aparecer en Guía Jaco?</h2>
      <h3>¡Es totalmente gratuito!</h3>
      <p>
        Si Ud. tiene un emprendimiento, una empresa u ofrece servicios
        particulares puede agregar sus datos comerciales de forma totalmente
        gratuita.
      </p>
      <Button
        fullWidth
        className="main-bg-color"
        component={Link}
        to="/solicitar-alta"
      >
        Quiero agregar mi negocio
        <ChevronRight />
      </Button>
    </div>

    <div className="DetailBox">
      <h2>¿Desea figurar en los destacados del mes?</h2>
      <p>
        Por un precio mensual accesible su empresa puede aparecer en un espacio
        privilegiado de Guía Jaco.
      </p>
      <Button
        fullWidth
        className="main-bg-color"
        component={Link}
        to="/publicitar"
      >
        Me gustaría saber más
        <ChevronRight />
      </Button>
    </div>

    <div className="DetailBox grey-bg-color">
      <h2>¿Sugerencias, dudas, comentarios?</h2>
      <p>
        Nos encanta saber de nuestros usuarios, por cualquier consulta no dudes
        en contactarnos.
      </p>
      <Button
        fullWidth
        className="main-bg-color"
        component={Link}
        to="/contacto"
      >
        Ir al formulario de contacto
        <ChevronRight />
      </Button>
    </div>
  </div>
);

export default ContactAccess;
