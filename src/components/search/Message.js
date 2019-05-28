import React from 'react';

const Message = props => {
  if (!props.show) {
    return <div>No se encontraron resultados</div>;
  }
  return null;
};

export default Message;
