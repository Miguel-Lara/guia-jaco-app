import React, { Component } from 'react';
import ContactLinks from '../components/shared/ContactLinks';
import Featured from '../components/widgets/featured/Featured';
import Footer from '../components/shared/Footer';
import PageTitle from '../components/shared/PageTitle';
import Phones from '../components/shared/Phones';
import PropTypes from 'prop-types';
import SearchByWord from './SearchByWord';
import SocialSharing from '../components/shared/social/SocialSharing';
import withConfig from '../hoc/withConfig';
import { withRouter } from 'react-router-dom';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from '../redux/actions';
import { bindActionCreators } from 'redux';

class HomePage extends Component {
  state = {
    mounted: false
  };

  componentWillMount() {
    this.props.getConfig('HomePage');
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.mounted;
  }

  render() {
    const { categories, featured, phones, contact_links } = this.props.config;
    const search = {
      categories,
      history: this.props.history,
      params: this.props.match.params
    };
    return (
      <div>
        <PageTitle title="Guía Jaco. Buscar." />
        <SearchByWord {...search} />
        <Featured items={featured} />
        <ContactLinks items={contact_links} />
        <Phones items={phones} />
        <SocialSharing />
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  config: PropTypes.object
};

const mapStateToProps = state => {
  return {
    config: state.config.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConfig }, dispatch);
};

let homePage = withConfig(HomePage);
homePage = withRouter(homePage);
homePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(homePage);

export default homePage;
