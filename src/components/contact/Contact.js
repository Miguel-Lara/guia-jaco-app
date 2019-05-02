import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import Send from '@material-ui/icons/Send';

import FormResult from './FormResult';

class Contact extends Component {
  state = {
    name: ''
  };

  handleChange(event) {
    console.log(event);
  }

  // TODO: Implementar esto:
  showResult(result) {
    return <FormResult result />;
  }

  render() {
    return (
      <form className="ContentBox">
        <h1>Contacto</h1>
        <div className="Row">
          <TextField
            id="standard-name"
            label="Nombre"
            className="Input"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            autoFocus
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            id="standard-name"
            label="Apellido"
            className="Input"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            id="standard-name"
            label="Email"
            className="Input"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            id="standard-name"
            label="Teléfono (Opcional)"
            className="Input"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            id="standard-name"
            label="Mensaje"
            className="Input"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
            multiline
            rows="6"
          />
        </div>
        <div className="Row">
          <Button 
          fullWidth
          variant="contained" 
          className="main-bg-color">
            Enviar&nbsp;
            <Send />
          </Button>
        </div>
      </form>
    );
  }
}

export default Contact;
