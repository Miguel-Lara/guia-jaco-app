import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import About from './components/info/About';
import AddCompany from './components/contact/AddCompany';
import Advertising from './components/contact/Advertising';
import CompanyPage from './components/company/CompanyPage';
import Contact from './components/contact/Contact';
import FeaturedPage from './components/home/FeaturedPage';
import Header from './components/shared/Header';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import SideNav from './components/shared/SideNav';
import Terms from './components/info/Terms';
import './App.css';

class App extends Component {
  state = {
    openDrawer: false
  };

  cb = value => {
    console.log('App: toggleDrawer: ', value);
    this.setState({
      openDrawer: true
    });
  };

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
  }

  // <BrowserRouter basename='/demo/'> TODO: Usar para deploy!
  render() {
    return (
      <div>
        <BrowserRouter>
          <SideNav open={this.state.openDrawer} />
          <Header cb={this.cb} />

          <Route path="/buscar/:word/:category/:sub" component={SearchPage} />
          <Route path="/buscar/:word/:category" component={SearchPage} />
          <Route path="/buscar/:word" component={SearchPage} />
          <Route path="/buscar" exact render={() => <Redirect to="/home" />} />

          <Route path="/empresa/:id" component={CompanyPage} />
          <Route path="/home/:word/:category" exact component={HomePage} />
          <Route path="/destacados" exact component={FeaturedPage} />

          <Route path="/contacto" exact component={Contact} />
          <Route path="/publicitar" exact component={Advertising} />
          <Route path="/solicitar-alta" exact component={AddCompany} />
          <Route path="/que-es-guia-jaco" exact component={About} />
          <Route path="/terminos-de-uso" exact component={Terms} />

          <Route path="/" exact component={HomePage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
