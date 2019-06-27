import React, { Component } from 'react';
import Footer from '../components/shared/Footer';
import Layout from '../components/shared/Layout';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PageTitle from '../components/shared/PageTitle';
import PropTypes from 'prop-types';
import Spinner from '../components/shared/Spinner';
import { Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import withConfig from '../hoc/withConfig';

// Redux:
import { connect } from 'react-redux';
import { getConfig } from '../redux/actions';
import { bindActionCreators } from 'redux';

const sections = {
  rubros: {
    table: 'categories',
    title: 'Rubros',
    keyWord: 'rubro'
  },
  servicios: {
    table: 'services',
    title: 'Servicios',
    keyWord: 'servicio'
  }
};

class CategoriesList extends Component {
  render() {
    const sectionId = this.props.match.path.replace('/', '');
    const { table, keyWord, title } = sections[sectionId];
    const results = this.props.config[table];

    if (sectionId && table && results) {
      return (
        <div>
          <PageTitle title={`Guía Jaco. ${title}`} />
          <Layout>
            <Typography variant="h1">{`Listado de ${title}`}</Typography>
            <List>
              {// Generate category list:
              results.map(({ id, string_id, title }) => {
                return (
                  <ListItem
                    key={id}
                    button
                    component={Link}
                    to={`/buscar/${keyWord}/${string_id}/asc/0`}
                  >
                    <ListItemText primary={title} />
                    <ChevronRight color="secondary" />
                  </ListItem>
                );
              })}
            </List>
          </Layout>
          <Footer />
        </div>
      );
    }

    return <Spinner />;
  }
}

CategoriesList.propTypes = {
  config: PropTypes.object,
  match: PropTypes.object
};

const mapStateToProps = state => {
  return {
    config: state.config.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConfig }, dispatch);
};

const categoriesList = withConfig(CategoriesList);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(categoriesList));
