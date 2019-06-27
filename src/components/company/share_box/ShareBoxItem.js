import React from 'react';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';

library.add(faFacebook, faWhatsapp);

const styles = {
  item: {
    padding: '20px 0 0 0',
    margin: '10px auto'
  },
  icon: {
    fontSize: 40,
    color: 'white'
  },
  whatsapp: {
    background: '#25D366'
  },
  facebook: {
    background: '#3b5998'
  },
  body2: {
    color: 'white'
  }
};

const ShareBoxItem = ({ type, title, url }) => (
  <div
    style={{
      ...styles.item,
      ...styles[type]
    }}
  >
    {type === 'facebook' ? (
      <FacebookShareButton url={url}>
        <FontAwesomeIcon style={styles.icon} icon={faFacebook} />
        <Typography variant="body2" style={styles.body2}>
          {title}
        </Typography>
      </FacebookShareButton>
    ) : (
      <WhatsappShareButton url={url}>
        <FontAwesomeIcon style={styles.icon} icon={faWhatsapp} />
        <Typography variant="body2" style={styles.body2}>
          {title}
        </Typography>
      </WhatsappShareButton>
    )}
  </div>
);

ShareBoxItem.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ShareBoxItem;
