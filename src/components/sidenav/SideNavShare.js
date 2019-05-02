import React from 'react';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';

import '../../css/SideNavShare.css';
library.add(faFacebook, faInstagram, faWhatsapp, faTwitter);

const SideNavShare = props => {
  const icons = [
    { icon: faFacebook, link: 'http://www.facebook.com' },
    { icon: faInstagram, link: 'http://www.facebook.com' },
    { icon: faWhatsapp, link: 'http://www.facebook.com' },
    { icon: faTwitter, link: 'http://www.facebook.com' }
  ];

  const buildItems = () => {
    return icons.map((icon, index) => {
      return (
        <a
          href={icon['link']}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="Item"
        >
          <Fab size="medium" className="main-bg-color">
            <FontAwesomeIcon size="2x" icon={icon['icon']} />
          </Fab>
        </a>
      );
    });
  };

  return (
    <div className="SideNavShare">
      <p>Seguinos en las redes:</p>
      {buildItems()}
    </div>
  );
};

export default SideNavShare;
