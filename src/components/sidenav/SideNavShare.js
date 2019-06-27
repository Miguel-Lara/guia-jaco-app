import React from 'react';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import SideNavItem from './SideNavItem';
import { Card, Typography } from '@material-ui/core';
library.add(faFacebook, faInstagram, faWhatsapp, faTwitter);

const icons = {
  facebook: faFacebook,
  instagram: faInstagram,
  whatsapp: faWhatsapp,
  twitter: faTwitter
};

const SideNavShare = props => (
  <Card raised>
    <Typography variant="h2">Seguinos en las redes:</Typography>
    <div>
      {props.data.map((item, index) => (
        <SideNavItem key={index} link={item.link} icon={icons[item.id]} />
      ))}
    </div>
  </Card>
);

export default SideNavShare;
