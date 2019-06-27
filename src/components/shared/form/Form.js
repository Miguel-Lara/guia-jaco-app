import React, { Component, memo } from 'react';
import FormResult from './FormResult';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

// Redux:
import { connect } from 'react-redux';
import { getConfig, sendForm, resetForm } from '../../../redux/actions';
import { bindActionCreators } from 'redux';
import { Typography } from '@material-ui/core';

const styles = {
  main: {
    padding: '0 30px 30px 30px'
  }
};

class Form extends Component {
  state = {
    formData: {},
    submitted: false
  };

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = () => {
    const data = {
      ...this.state.formData,
      type: this.props.type
    };

    this.props.sendForm(data);
    this.setState({
      submitted: true
    });
  };

  componentWillMount() {
    this.props.getConfig('Form');
  }

  componentWillReceiveProps(nextProps) {
    let formData = {};
    const incoming = nextProps.config.forms[this.props.type];
    incoming.forEach(element => {
      // TODO: Creating the state formData in this way
      // produces undesired state reset when sending error.
      if (!formData[element.id]) {
        formData[element.id] = '';
      }
    });

    this.setState({
      formData
    });
  }

  componentWillUnmount() {
    this.props.resetForm();
  }

  render() {

    if (!this.props.config) {
      return <Spinner />;
    }

    if (this.state.submitted && !this.props.sended) {
      return <Spinner />;
    }

    if (this.props.sended) {
      return (
        <FormResult
          success={this.props.sended.success}
          callback={this.handleSubmit.bind(this)}
        />
      );
    }

    const { submitted } = this.state;
    const fields = this.props.config.forms[this.props.type];

    if (!fields) {
      throw new Error('Form fields is undefined.');
    }

    return (
      <div style={styles.main}>
        <Typography variant="h1">{this.props.title}</Typography>
        <Typography variant="caption">
          (Todos los campos son obligatorios)
        </Typography>
        <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
          {fields.map((input, i) => {
            const { id, label, validators, messages } = input;
            const prev = this.state.formData[id];
            const value = prev ? prev : '';

            return (
              <TextValidator
                autoFocus={i === 0}
                key={id}
                name={id}
                label={label}
                onChange={this.handleChange.bind(this)}
                value={value}
                validators={validators}
                errorMessages={messages}
                fullWidth
                style={{ marginBottom: 20 }}
              />
            );
          })}

          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
          >
            Enviar
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    config: state.config.payload,
    sended: state.form.payload
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getConfig, sendForm, resetForm }, dispatch);
}

Form.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const form = memo(Form);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(form);
