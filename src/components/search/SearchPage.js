import React, { Component } from 'react';
import axios from 'axios';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

import API_URL from '../../utils/constants';
import FilterBox from './FilterBox';
import Footer from '../shared/Footer';
import ResultItem from './ResultItem';
import withConfig from '../../hoc/withConfig';
import '../../css/SearchPage.css';

class SearchPage extends Component {
  state = {
    results: null
  };

  loadResults() {
    axios
      .get(API_URL + '?file_name=results')
      .then(response => {
        this.setState({
          results: response.data.results
        });
      })
      .catch(error => {
        console.log('ERROR cargando el config: ', error);
        this.setState({
          results: null
        });
      });
  }

  buildResultItems() {
    if (!this.state.results) {
      return <div>No se encontraron resultados</div>;
    }
    return this.state.results.map((element, index) => (
      <ResultItem key={index} data={element} />
    ));
  }

  onFilterBoxChanged(event) {
    // TODO: Pasar a la API:
    // la palabra a buscar,
    // la categoría
    // el orden:
    this.setState({ results: null });
    this.loadResults();
  }

  componentDidMount() {
    this.loadResults();
  }

  render() {
    let dom = <CircularProgress className="Spinner" />;

    const config = this.props.config;
    const params = this.props.match.params;

    if (config && params && this.state.results) {
      // Define aliases:
      const categories = config.categories;
      const length = this.state.results.length;
      const word = params.word;
      const category = params.cat;
      const sort = params.sort;

      // Define results DOM:
      dom = (
        <div className="Page">
          <Link className="Back" to={'/home/' + params.word + '/' + category}>
            <ChevronLeft />
            <span>Buscar de nuevo</span>
          </Link>

          <div className="ContentBox SearchPage">
            <h1>{word}</h1>
            <h2>{length} resultados</h2>
            <Divider />

            <FilterBox
              title="Categorías:"
              items={categories}
              selected={category}
              cb={this.onFilterBoxChanged.bind(this)}
            />

            <FilterBox
              title="Ordenar:"
              items={config.sort_types}
              selected={sort}
              cb={this.onFilterBoxChanged.bind(this)}
            />

            <Divider />
            {this.buildResultItems()}
          </div>
          <Footer />
        </div>
      );
    }

    return dom;
  }
}

export default withConfig(SearchPage);
