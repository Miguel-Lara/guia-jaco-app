import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom';

import Search from '@material-ui/icons/Search';
import logo from '../../assets/logo-header.png';

class Header extends Component {
  setSearchButton() {
    let button = <div />;
    if (this.props.location.pathname !== '/') {
      button = (
        <Button variant="contained" size="small" className="ButtonDefault">
          Buscar
          <Search className="ButtonDefaultIcon" />
        </Button>
      );
    }
    return button;
  }

  render() {
    return (
      <AppBar position="sticky" className="main-bg-color">
        <Toolbar style={{ paddingLeft: 0 }}>
          <IconButton color="inherit" aria-label="Menu" onClick={this.props.cb}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img
              alt="Guía Jaco. Home."
              src={logo}
              style={{
                maxHeight: '40px',
                marginTop: '5px'
              }}
            />
          </Link>

          <span className="spacer" />

          {this.setSearchButton()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
