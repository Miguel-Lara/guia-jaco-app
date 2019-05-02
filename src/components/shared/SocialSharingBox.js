import React from 'react';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneIphoneOutlined from '@material-ui/icons/PhoneIphoneOutlined';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/SocialSharingBox.css';

library.add(faFacebook, faInstagram);

const SocialSharingBox = props => (
  <div className="SocialSharingBox">
    <h1>Guía Jaco en la web</h1>
    <div className="SocialIcons">
      <a
        href="http://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} className="Icon" />
      </a>
      <a
        href="http://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="Icon" />
      </a>
    </div>

    <div className="Link">
      <a
        href="mailto:guijaco@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MailOutline />
        &nbsp; guiajaco@gmail.com.ar
      </a>
    </div>

    <div className="Link">
      <a href="www.guiajaco.com.ar" target="_blank">
        <PhoneIphoneOutlined />
        &nbsp; www.guiajaco.com.ar
      </a>
    </div>
  </div>
);

export default SocialSharingBox;
