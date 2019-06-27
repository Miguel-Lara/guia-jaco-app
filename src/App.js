import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './components/info/About';
import AddCompany from './components/contact/AddCompany';
import Advertising from './components/contact/Advertising';
import CompanyPage from './containers/CompanyPage';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import HomePage from './containers/HomePage';
import Page404 from './components/shared/Page404';
import CategoriesList from './containers/CategoriesList';
import ResultsPage from './containers/ResultsPage';
import SideNav from './components/sidenav/SideNav';
import Terms from './components/info/Terms';
import './App.css';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from './redux/actions';
import { bindActionCreators } from 'redux';

// Theme:
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Spinner from './components/shared/Spinner';

class App extends Component {
  state = {
    openDrawer: false
  };

  openDrawer = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  };

  componentWillMount() {
    this.props.getConfig('App');
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.config !== nextProps.config) {
      return true;
    }
    if (this.state.openDrawer !== nextState.openDrawer) {
      return true;
    }
    return false;
  }

  render() {
    if (!this.props.config) {
      return <Spinner />;
    }

    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <SideNav open={this.state.openDrawer} callback={this.openDrawer} />
          <Header cb={this.openDrawer} />

          <Switch>

            <Route path="/buscar/:word/:category/:sort/:page" exact component={ResultsPage} />
            <Route path="/buscar" exact render={() => <Redirect to="/home" />} />

            <Route path="/rubros" exact component={CategoriesList} />

            <Route path="/servicios" exact component={CategoriesList} />

            <Route path="/home/:word/:category" exact component={HomePage} />
            <Route path="/home/:word/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />

            <Route path="/empresa/:id" component={CompanyPage} />
            <Route path="/empresa" exact render={() => <Redirect to="/home" />} />

            <Route path="/contacto" exact component={Contact} />
            <Route path="/publicitar" exact component={Advertising} />
            <Route path="/solicitar-alta" exact component={AddCompany} />
            <Route path="/que-es-guia-jaco" exact component={About} />
            <Route path="/terminos-de-uso" exact component={Terms} />

            <Route path="/" exact component={HomePage} />

            <Route component={Page404} />
          </Switch>
          
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

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
)(App);
