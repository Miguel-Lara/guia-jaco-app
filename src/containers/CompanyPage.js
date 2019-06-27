import React, { Component } from 'react';
import ChipBox from '../components/company/chips/ChipBox';
import DataBox from '../components/company/DataBox';
import Footer from '../components/shared/Footer';
import Image from '../components/shared/Image';
import Layout from '../components/shared/Layout';
import LinkBox from '../components/company/LinkBox';
import PageTitle from '../components/shared/PageTitle';
import Phones from '../components/company/Phones';
import ShareBox from '../components/company/share_box/ShareBox';
import Schedules from '../components/company/schedules/Schedules';
import SocialSharing from '../components/shared/social/SocialSharing';
import TextBox from '../components/company/TextBox';

// Redux:
import { connect } from 'react-redux';
import { getCompany } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { Typography, Divider } from '@material-ui/core';

class CompanyPage extends Component {
  componentWillMount() {
    const company_id = this.props.match.params.id;
    if (!company_id) {
      this.props.history.push('/');
    }
    this.props.getCompany(company_id);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.config === nextProps.config &&
      this.props.results === nextProps.results
    ) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    // this.props.resetApiState();
  }

  render() {
    const { results } = this.props;

    if (results && results.created_at) {
      const {
        main_address,
        secondary_address,
        schedules,
        categories,
        description,
        featured_news,
        featured_save,
        images,
        links,
        phones,
        short_description,
        services,
        title
      } = results;

      return (
        <div>
          <PageTitle title={`Guía Jaco. ${title}.`} />

          <Image alt={title} src={images[0]} />

          <Layout>
            <Typography variant="h1">{title}</Typography>

            <Typography variant="body1">{short_description}</Typography>

            <DataBox title="Horarios">
              <Schedules data={schedules} />
            </DataBox>

            <DataBox title="Dirección">
              <Typography variant="h3">{main_address}</Typography>
              <Typography variant="body2">{secondary_address}</Typography>
            </DataBox>

            <DataBox title="Teléfonos">
              <Phones data={phones} />
            </DataBox>

            <TextBox title="Oferta Destacada" text={featured_save} />

            <TextBox title="Novedad destacada" text={featured_news} />

            <ChipBox title="Rubro" items={categories} link="rubro" />

            <ChipBox
              title="Servicios"
              color="main"
              link="servicio"
              items={services}
            />

            <Divider />
            <Image alt={title} src={images[1]} />

            <Divider />
            <Image alt={title} src={images[2]} />

            <TextBox title="Descripción" text={description} />

            <Divider />

            {links && links.length > 0
              ? links.map((link, i) => <LinkBox key={i} data={link} />)
              : null}
          </Layout>

          <ShareBox url={`https://guiajaco.com.ar${this.props.match.url}`} />

          <SocialSharing />

          <Footer />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    config: state.config.payload,
    results: state.api.payload
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCompany }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyPage);
