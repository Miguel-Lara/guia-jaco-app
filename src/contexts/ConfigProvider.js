import React, { Component } from 'react';
import axios from 'axios';

import API_URL from '../utils/constants';
import ConfigContext from './ConfigContext';

class ConfigProvider extends Component {
  state = {
    loading: true,
    config: null
  };

  componentWillMount() {
    axios
      .get(API_URL + '?file_name=config')
      .then(response => {

        setTimeout(() => { // TODO: ONLY TEST
          this.setState({
            loading: false,
            config: response.data
          });
        }, 500);
      })
      .catch(error => {
        console.log('ERROR cargando el config: ', error);
      });
  }

  render() {
    return (
      <ConfigContext.Provider value={this.state}>
        {this.props.children}
      </ConfigContext.Provider>
    );
  }
}

export default ConfigProvider;
