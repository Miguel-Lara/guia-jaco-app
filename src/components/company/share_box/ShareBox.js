import React from 'react';

import ShareBoxItem from './ShareBoxItem';
import '../../../css/ShareBox.css';

const ShareBox = props => {
  return (
    <div className="ShareBox">
      <h1>
        ¡Comparte este comercio<br />con tus amigos!
      </h1>
      <ShareBoxItem type="whatsapp" title="Compartir en Whatsapp" />
      <ShareBoxItem type="facebook" title="Compartir en Facebook" />
    </div>
  );
};
export default ShareBox;
