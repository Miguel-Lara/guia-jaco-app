import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Link, withRouter } from 'react-router-dom';
import Logo from '../shared/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import Toolbar from '@material-ui/core/Toolbar';

// Theme:
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import theme from '../../theme';

const Header = props => {
  const pathname = props.location.pathname;
  const showButton = pathname !== '/' && pathname.indexOf('home') === -1;

  return (
    // <MuiThemeProvider theme={theme}>
    <AppBar position="sticky" className="main-bg-color">
      <Toolbar style={{ paddingLeft: 0 }}>
        <IconButton color="inherit" aria-label="Menu" onClick={props.cb}>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <Logo type="header" />
        </Link>
        <span className="spacer" />
        <SearchButton show={showButton} />
      </Toolbar>
    </AppBar>
    // </MuiThemeProvider>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  cb: PropTypes.func.isRequired
};

export default withRouter(Header);
