import React from 'react';
import ConfigContext from '../contexts/ConfigContext';

const withConfig = Component => {
  return function fn(props) {
    return (
      <ConfigContext.Consumer>
        {context => <Component {...props} {...context} />}
      </ConfigContext.Consumer>
    );
  };
};

export default withConfig;
