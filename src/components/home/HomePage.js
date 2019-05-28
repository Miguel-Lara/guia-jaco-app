import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactAccess from '../shared/ContactAccess';
import Featured from './featured/Featured';
import Footer from '../shared/Footer';
import Phones from '../shared/Phones';
import SearchByWord from '../shared/SearchByWord';
import SocialSharingBox from '../shared/SocialSharingBox';
import { withRouter } from 'react-router-dom';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from '../../redux/actions';
import { bindActionCreators } from 'redux';

class HomePage extends Component {
  componentWillMount() {
    this.props.getConfig();
  }

  render() {
    if (this.props.config) {
      const { featured, phones } = this.props.config;
      const search = {
        categories: this.props.config.categories,
        history: this.props.history,
        params: this.props.match.params
      };

      return (
        <div>
          <SearchByWord {...search} />
          <Featured items={featured} />
          <ContactAccess />
          <Phones items={phones} />
          <SocialSharingBox />
          <Footer />
        </div>
      );
    }

    return <CircularProgress className="Spinner" />;
  }
}

function mapStateToProps(state) {
  return {
    config: state.config.payload
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getConfig }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
