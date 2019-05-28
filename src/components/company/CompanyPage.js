import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ChipBox from './chips/ChipBox';
import DataBox from './DataBox';
import Footer from '../shared/Footer';
import LinkBox from './LinkBox';
import Phones from './Phones';
import ShareBox from './share_box/ShareBox';
import Schedules from './schedules/Schedules';
import SocialSharingBox from '../shared/SocialSharingBox';
import TextBox from './TextBox';
import '../../css/CompanyPage.css';
import { withRouter } from 'react-router-dom';

// Redux:
import { connect } from 'react-redux';
import { getConfig, getSingle } from '../../redux/actions';
import { bindActionCreators } from 'redux';

class CompanyPage extends Component {
  state = {
    company: null
  };

  componentWillMount() {
    this.props.getSingle('id-de-la-empresa');
    this.props.getConfig();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.results) {
      const company = nextProps.results.company;
      this.setState({
        company
      });
    }
  }

  render() {
    const company = this.state.company;

    if (this.props.config && company) {
      return (
        <div>
          <div className="ContentBox CompanyPage">
            <img alt={company.title} src={company.images[0]} />

            <h1>{company.title}</h1>
            <h2>{company.short_description}</h2>

            <DataBox title="Horarios">
              <Schedules data={company.bussiness_hours} />
            </DataBox>

            <DataBox title="Dirección">
              <h4>{company.adress.main}</h4>
              <p>{company.adress.secundary}</p>
            </DataBox>

            <DataBox title="Teléfonos">
              <Phones data={company.phones} />
            </DataBox>

            <TextBox title="Oferta Destacada" text={company.featured_save} />

            <TextBox title="Novedad destacada" text={company.featured_news} />

            <ChipBox title="Rubro" items={company.categories} link="/rubros" />

            <ChipBox
              title="Servicios"
              color="secundary"
              link="/servicios"
              items={company.subcategories}
            />

            <img alt={company.title} src={company.images[1]} />

            <img alt={company.title} src={company.images[2]} />

            <p>{company.description}</p>

            <LinkBox data={company.links[0]} />

            <LinkBox data={company.links[1]} />

            <LinkBox data={company.links[2]} />
          </div>

          <ShareBox />

          <SocialSharingBox />

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
  return bindActionCreators({ getConfig, getSingle }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyPage));
