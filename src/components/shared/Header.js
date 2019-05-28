import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, withRouter } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import logo from '../../assets/logo-header.png';

const styles = {
  toolbar: {
    paddingLeft: 0
  },
  logo: {
    maxHeight: 40,
    marginTop: 5
  }
};

class Header extends Component {
  setSearchButton() {
    // TODO: Esto tiene que ir por fuera:
    const pathname = this.props.location.pathname;

    if (pathname !== '/' && pathname.indexOf('home') === -1) {
      return (
        <Button
          variant="contained"
          size="small"
          className="ButtonDefault"
          component={Link}
          to="/"
        >
          Buscar
          <Search className="ButtonDefaultIcon" />
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      <AppBar position="sticky" className="main-bg-color">
        <Toolbar style={styles.toolbar}>
          <IconButton color="inherit" aria-label="Menu" onClick={this.props.cb}>
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img alt="Guía Jaco. Home." src={logo} style={styles.logo} />
          </Link>
          <span className="spacer" />
          {this.setSearchButton()}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
