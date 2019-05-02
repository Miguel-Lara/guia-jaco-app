import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import ContactAccess from '../shared/ContactAccess';
import Featured from './Featured';
import Footer from '../shared/Footer';
import Phones from '../shared/Phones';
import SearchByWord from '../shared/SearchByWord';
import SocialSharingBox from '../shared/SocialSharingBox';
import withConfig from '../../hoc/withConfig';

class HomePage extends Component {
  render() {

    
    const data = this.props.config;
    
    if (data) {
      return (
        <div className="Page">
          <SearchByWord 
          categories={data.categories} 
          history={this.props.history}
          params={this.props.match.params} />
          <Featured items={data.featured} />
          <ContactAccess />
          <Phones items={data.phones} />
          <SocialSharingBox />
          <Footer />
        </div>
      );
    }

    return <CircularProgress className="Spinner" />;
  }
}

export default withConfig(HomePage);
