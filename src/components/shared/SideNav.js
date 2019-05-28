import React, { Component } from 'react';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../../assets/logo-sidenav.png';
import SideNavShare from '../sidenav/SideNavShare';
import '../../css/SideNav.css';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from '../../redux/actions';
import { bindActionCreators } from 'redux';

class SideNav extends Component {
  state = {
    open: false
  };

  toggleDrawer = value => () => {
    this.setState({
      open: value
    });
  };

  buildMenu(_data) {
    const dom = _data.map((element, index) => (
      <div key={index}>
        <ListItem button component={Link} to={element.link}>
          <ListItemText primary={element.label} className="SideNavButton" />
          <ChevronRight />
        </ListItem>
      </div>
    ));
    return (
      <List className="List">
        <Divider />
        {dom}
      </List>
    );
  }

  componentWillMount() {
    this.props.getConfig();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  render() {
    let dom = <div />;
    const config = this.props.config;

    if (config) {
      dom = (
        <Drawer
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          onClick={this.toggleDrawer(false)}
        >
          <div className="SideNav">
            <img alt="Guía Jaco. Menú" src={logo} className="logo" />

            {this.buildMenu(this.props.config.sidenav.top_menu)}

            <SideNavShare />

            <span className="spacer" />

            {this.buildMenu(this.props.config.sidenav.bottom_menu)}
          </div>
        </Drawer>
      );
    }

    return dom;
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
)(SideNav);
