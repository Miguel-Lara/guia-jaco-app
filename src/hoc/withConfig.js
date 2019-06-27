import React from 'react';
import Spinner from '../components/shared/Spinner';
import ApiError from '../components/shared/ApiError';

const withConfig = (WrappedComponent, requiredProp) => {
  return class PP extends React.Component {
    render() {
      if (!this.props.config) {
        return <Spinner />;
      }

      if (this.props.config.error) {
        return <ApiError />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withConfig;
