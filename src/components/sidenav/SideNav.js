import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Logo from '../shared/Logo';
import PropTypes from 'prop-types';
import SideNavMenu from './SideNavMenu';
import SideNavShare from './SideNavShare';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from '../../redux/actions';
import { bindActionCreators } from 'redux';

class SideNav extends Component {
  state = {
    open: false
  };

  toggleDrawer = value => () => {
    this.props.callback();
  };

  componentWillMount() {
    this.props.getConfig('SideNav');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.open !== nextState.open) {
      return true;
    }
    return false;
  }

  render() {
    const drawerConfig = {
      open: this.state.open,
      onClose: this.toggleDrawer(false),
      onClick: this.toggleDrawer(false)
    };

    if (this.props.config && !this.props.config.error) {
      const { top_menu, bottom_menu, social_links } = this.props.config.sidenav;
      return (
        <Drawer {...drawerConfig}>
          <div>
            <Logo type="sidenav" />
            <SideNavMenu data={top_menu} />
            <SideNavShare data={social_links} />
            <SideNavMenu data={bottom_menu} />
          </div>
        </Drawer>
      );
    }
    return null;
  }
}

SideNav.propTypes = {
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideNav);
