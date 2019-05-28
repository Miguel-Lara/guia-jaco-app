import React, { Component } from 'react';
import ButtonBack from './Buttonback';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';
import FilterBox from './FilterBox';
import Footer from '../shared/Footer';
import Message from './Message';
import ResultItem from './ResultItem';
import '../../css/SearchPage.css';

// Redux:
import { connect } from 'react-redux';
import { getConfig, search } from '../../redux/actions';
import { bindActionCreators } from 'redux';

class SearchPage extends Component {
  state = {
    results: null
  };

  onFilter(event) {
    // TODO: Recargar la pàgina con el formato:
    /*
    buscar/word/ --------------------------> buscar/carpintería
    buscar/word/category/ -----------------> buscar/carpintería/construcción
    buscar/word/category/subcategory/ -----> buscar/carpintería/construcción/mano-de-obra
    buscar/word/category/subcategory/asc --> buscar/carpintería/construcción/mano-de-obra/asc
    */
  }

  componentWillMount() {
    this.props.search('test_word', 'test_category', 'desc');
    this.props.getConfig();
  }

  componentWillReceiveProps(nextProps) {
    const { results } = nextProps;
    this.setState({
      results
    });
  }

  render() {
    const config = this.props.config;
    const params = this.props.match.params;
    const results = this.state.results;

    if (config && params && results) {
      // -----------
      // SETUP VIEW:
      // -----------
      const { categories, sort_types } = config;
      const { word, category, sort } = params;
      const length = results.length;
      const categFilter = {
        title: 'Categorías:',
        items: categories,
        selected: category,
        cb: this.onFilter.bind(this)
      };
      const subcatFilter = {
        title: 'Ordenar:',
        items: sort_types,
        selected: sort,
        cb: this.onFilter.bind(this)
      };

      // ---------------
      // IMPLEMENT VIEW:
      // ---------------
      return (
        <div>
          <ButtonBack word={word} category={category} />
          <div className="ContentBox SearchPage">
            <h1>{word}</h1>
            <h2>{length} resultados</h2>
            <FilterBox {...categFilter} />
            <FilterBox {...subcatFilter} />
            <Message show={results} />
            {results.map((item, i) => ( // Pasar a un component "SearchResults".
              <ResultItem key={i} data={item} />
            ))}
          </div>
          <Footer />
        </div>
      );
    }

    return <CircularProgress className="Spinner" />;
  }
}

function mapStateToProps(state) {
  return {
    config: state.config.payload,
    results: state.api.payload
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getConfig, search }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchPage));
