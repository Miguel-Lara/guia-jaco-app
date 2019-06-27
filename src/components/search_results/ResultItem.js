import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ResultItemChips from './ResultItemChips';
import { Typography, Card } from '@material-ui/core';

const styles = {
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
};

const ResultItem = props => {
  const { button } = styles;
  const { id, title, description, categories, services } = props;
  const link = '/empresa/' + id;

  return (
    <Card>
      <ButtonBase style={button} component={Link} to={link}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="caption" style={{ marginBottom: 15 }}>
          {description}
        </Typography>
      </ButtonBase>
      <ResultItemChips section="rubro" items={categories} type="main" />
      <ResultItemChips section="servicio" items={services} />
    </Card>
  );
};

ResultItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default ResultItem;
