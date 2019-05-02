import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/ShareBox.css';

const ShareBoxItem = props => {
  //
  // Setup font-awesome lib:
  library.add(faFacebook, faWhatsapp);

  // Set the icon type:
  let iconType;
  let bgColor;
  switch (props.type) {
    case 'whatsapp':
      iconType = faWhatsapp;
      bgColor = '#25D366';
      break;
    case 'facebook':
    default:
      iconType = faFacebook;
      bgColor = '#3b5998';
      break;
  }

  return (
    <div className="ShareBoxItem" style={{ background: bgColor }}>
      <FontAwesomeIcon className="ShareBoxIcon" icon={iconType} />
      <p>{props.title}</p>
    </div>
  );
};

export default ShareBoxItem;
