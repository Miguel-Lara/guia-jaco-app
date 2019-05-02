import React from 'react';
const ConfigContext = React.createContext({
  data: 'initial data',
  addItem: value => {
    console.log('... adding item: ', value);
  }
});
export default ConfigContext;
