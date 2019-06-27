import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Filter from '../components/widgets/filter/Filter';
import Footer from '../components/shared/Footer';
import Layout from '../components/shared/Layout';
// import MessageEmpty from '../components/search_results/MessageEmpty';
import PageTitle from '../components/shared/PageTitle';
import Paginator from '../components/search_results/Paginator';
import PropTypes from 'prop-types';
import Results from '../components/search_results/Results';
import Spinner from '../components/shared/Spinner';
import { withRouter } from 'react-router-dom';
import withConfig from '../hoc/withConfig';

// Redux:
import { connect } from 'react-redux';
import { getConfig, search, resetApiState } from '../redux/actions';
import { bindActionCreators } from 'redux';

class ResultsPage extends Component {
  itemsPerPage = 10;

  state = {};

  handleCategory(newCategory) {
    const { word, page } = this.props.match.params;
    this.props.history.push(
      `/buscar/${word}/${newCategory}/asc/${parseInt(page)}`
    );
  }

  handleSort(newSort) {
    const { word, category, page } = this.props.match.params;
    this.props.history.push(
      `/buscar/${word}/${category}/${newSort}/${parseInt(page)}`
    );
  }

  handlePaginator(event, page) {
    const { word, category } = this.props.match.params;
    this.props.history.push(`/buscar/${word}/${category}/asc/${page}`);
  }

  setupCategoryFilter() {
    const settings = {
      title: 'Rubro:',
      items: this.props.config.categories,
      selected: this.props.match.params.category,
      callback: this.handleCategory.bind(this)
    };
    return settings;
  }

  setupSortFilter() {
    const settings = {
      title: 'Ordenar:',
      items: this.props.config.sort_types,
      selected: this.props.match.params.sort,
      callback: this.handleSort.bind(this)
    };

    return settings;
  }

  setupPaginator() {
    const settings = {
      itemsPerPage: this.itemsPerPage,
      currentPage: parseInt(this.props.match.params.page),
      total: this.props.results.total,
      callback: this.handlePaginator.bind(this)
    };
    return settings;
  }

  setupMainTitle() {
    const { word, category } = this.props.match.params;
    let tmp;
    switch (word) {
      case 'rubro':
        const { categories } = this.props.config;
        tmp = categories.find(item => item.string_id === category);
        return tmp['title'];
      case 'servicios':
        const { services } = this.props.config;
        tmp = services.find(item => item.string_id === category);
        return tmp['title'];
      default:
        return word;
    }
  }

  CategoryFilter = () => {
    const { word } = this.props.match.params;
    if (word !== 'rubro' && word !== 'servicio') {
      return <Filter {...this.setupCategoryFilter()} />;
    }
    return null;
  };

  search(word, category, sort) {
    this.props.resetApiState();
    const page = parseInt(this.props.match.params.page);
    const offset = page * this.itemsPerPage;
    this.props.search(word, category, sort, offset, this.itemsPerPage);
  }

  componentWillMount() {
    // Load config:
    this.props.getConfig();

    // Execute first search:
    const { word, category, sort } = this.props.match.params;
    this.search(word, category, sort);

    // Detect when url changes:
    this.unlisten = this.props.history.listen((location, action) => {
      const splited = location.pathname.split('/');
      const word = splited[2];
      const category = splited[3];
      const sort = splited[4];

      // Search new results:
      if (word && category && sort) {
        this.search(word, category, sort);
      }
    });
  }

  componentWillUnmount() {
    this.props.resetApiState();
    this.unlisten();
  }

  render() {
    const results = this.props.results;

    if (results && results.total !== undefined) {
      const mainTitle = this.setupMainTitle();

      return (
        <div>
          <PageTitle title="Guía Jaco. Resultados." />
          <Layout small>
            <this.CategoryFilter />
            <Filter {...this.setupSortFilter()} />
            <Paginator {...this.setupPaginator()} />
            <Typography variant="h1">{mainTitle}</Typography>
            <Typography variant="body2">{results.total} resultados</Typography>
          </Layout>
          {/* <MessageEmpty show={results.total === 0} /> */}
          <Results data={results.items} />
          <Footer />
        </div>
      );
    }

    return <Spinner />;
  }
}

ResultsPage.propTypes = {
  config: PropTypes.object,
  match: PropTypes.object
};

const mapStateToProps = state => {
  return {
    config: state.config.payload,
    results: state.api.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConfig, search, resetApiState }, dispatch);
};

const resultsPage = withConfig(ResultsPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(resultsPage));
