import React from 'react';

import '../../css/MainLayout.css';
import '../../css/Footer.css';
import logo from '../../assets/logo-footer.png';

const Footer = props => (
  <div className="Footer">
    <img alt="Guía Jaco" src={logo} />
    <p>© Copyright 2019. Todos los derechos reservados.</p>
    <p>Desarrollo Pablo Lara</p>
  </div>
);

export default Footer;
