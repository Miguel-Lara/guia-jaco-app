import React from 'react';
import ExternalLink from './ExternalLik';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import MailOutline from '@material-ui/icons/MailOutline';
import PhoneIphoneOutlined from '@material-ui/icons/PhoneIphoneOutlined';
import Layout from '../../shared/Layout';
import { Typography } from '@material-ui/core';

library.add(faFacebook, faInstagram);

const styles = {
  main: {
    background: '#52569f',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  h1: {
    color: 'white',
    marginBottom: 20
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 30
  },
  icon: {
    color: 'white',
    fontSize: 60
  }
};

const links = {
  // TODO: Traer en el config.
  social: [
    { link: 'http://www.facebook.com', icon: faFacebook },
    { link: 'http://www.instagram.com', icon: faInstagram }
  ],
  normal: [
    {
      link: 'mailto:guijaco@gmail.com',
      icon: MailOutline,
      text: 'guiajaco@gmail.com.ar'
    },
    {
      link: 'http://www.guiajaco.com.ar',
      icon: PhoneIphoneOutlined,
      text: 'www.guiajaco.com.ar'
    }
  ]
};

const SocialSharing = () => {
  const { main, h1, icons, icon } = styles;

  return (
    <div style={main}>
      <Layout>
        <Typography variant="h1" style={h1}>
          Guía Jaco en la web
        </Typography>

        <div style={icons}>
          {links.social.map((item, i) => (
            <ExternalLink key={i} link={item.link}>
              <FontAwesomeIcon icon={item.icon} style={icon} />
            </ExternalLink>
          ))}
        </div>

        {links.normal.map((item, i) => (
          <ExternalLink key={i} link={item.link}>
            <item.icon />
            &nbsp; {item.text}
          </ExternalLink>
        ))}
      </Layout>
    </div>
  );
};

export default SocialSharing;
