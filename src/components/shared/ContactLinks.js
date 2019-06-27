import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ChevronRight from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const ContactLinks = ({ history, items }) => (
  <div>
    {items.map(({ title, subtitle, description, link, buttonText }, i) => (
      <Card key={i} raised={i % 2 === 0}>
        <CardContent>
          <Typography variant="h1">{title}</Typography>

          {subtitle.length !== 0 ? (
            <Typography variant="h2">{subtitle}</Typography>
          ) : null}

          <Typography variant="body2">{description}</Typography>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => history.push(link)}
          >
            {buttonText}
            <ChevronRight />
          </Button>
        </CardContent>
      </Card>
    ))}
  </div>
);

ContactLinks.propTypes = {
  items: PropTypes.array,
  history: PropTypes.object.isRequired
};

export default withRouter(ContactLinks);
