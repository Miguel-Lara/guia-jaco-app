import React from 'react';

const Image = ({ alt, src }) => {
  return (
    <img
      alt={alt}
      src={src}
      style={{
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0
      }}
    />
  );
};

export default Image;
