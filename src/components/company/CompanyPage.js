import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import API_URL from '../../utils/constants';
import ChipBox from './ChipBox';
import DataBox from './DataBox';
import Footer from '../shared/Footer';
import LinkBox from './LinkBox';
import ShareBox from './ShareBox';
import SocialSharingBox from '../shared/SocialSharingBox';
import TextBox from './TextBox';
import withConfig from '../../hoc/withConfig';
import '../../css/CompanyPage.css';

class CompanyPage extends Component {
  state = {
    company: null
  };

  loadResults() {
    axios
      .get(API_URL + '?file_name=company') // this.props.match.params.id
      .then(response => {
        this.setState({
          company: response.data.company
        });
      })
      .catch(error => {
        console.log('ERROR cargando el config: ', error);
        this.setState({
          company: null
        });
      });
  }

  makePhoneCall(_number) {}

  buildBussinessHours(_data) {
    return _data.map((element, index) => {
      const dom = element.hours.map((hour, i) => <p key={'h-' + i}>{hour}</p>);
      return (
        <div key={index}>
          <h4>{element.days}</h4>
          {dom}
        </div>
      );
    });
  }

  buildPhones(_data) {
    return _data.map((element, index) => (
      <div key={index} className="ButtonPhone">
        <p>{element.number}</p>
        <div className="spacer" />
        <a href={'tel:' + element.number}>
          <Button variant="outlined" size="small">
            Llamar
            <PhoneIcon fontSize="small" />
          </Button>
        </a>
        <p />
      </div>
    ));
  }

  componentDidMount() {
    this.loadResults();
  }

  render() {
    const company = this.state.company;
    let dom = <CircularProgress className="Spinner" />;

    if (this.props.config && this.state.company) {
      dom = (
        <div className="Page">
          <div className="ContentBox CompanyPage">
            <img alt={company.title} src={company.images[0]} />

            <h1>{company.title}</h1>
            <h2>{company.short_description}</h2>

            <DataBox title="Horarios">
              {this.buildBussinessHours(company.bussiness_hours)}
            </DataBox>

            <DataBox title="Dirección">
              <h4>{company.adress.main}</h4>
              <p>{company.adress.secundary}</p>
            </DataBox>

            <DataBox title="Teléfonos">
              {this.buildPhones(company.phones)}
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

    return dom;
  }
}

export default withConfig(CompanyPage);
