import React, { Component } from 'react';
import { TextField, Button, Divider } from '@material-ui/core';
import Send from '@material-ui/icons/Send';

import FormResult from './FormResult';
// import TextInput from './form_fields/TextInput';

class AddCompany extends Component {
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
        <h1>Quiero agregar mi negocio</h1>
        <p>
          Si usted desea agregar su negocio a Guía Jaco puede hacerlo de forma
          totalmente gratuita.
        </p>
        <Divider />
        <p>
          Puede llamarnos al teléfono &nbsp;
          <a href="tel:0294-15-4-666666" rel="noopener noreferrer">
            0294-15-4-666666
          </a>
          . De Lunes a Viernes, de 9 a 18hs
        </p>
        <Divider />
        <p>
          Puede enviarnos un email con sus datos a &nbsp;
          <a href="mailto:alta@guiajaco.com.ar" rel="noopener noreferrer">
            alta@guiajaco.com.ar
          </a>
        </p>
        <Divider />
        <p>O puede completar el siguiente formulario:</p>
        <h1>Formulario de alta Guía Jaco</h1>

        {/*         
        TODO: Todos los campos tienen que tener este formato:
        <TextInput label="test" value={name} onChange={onChange}  /> */}

        <div className="Row">
          <TextField
            label="Nombre de la empresa o negocio"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            label="Email"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <TextField
            label="Teléfono (Opcional)"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
            fullWidth
          />
        </div>
        <div className="Row">
          <br />
          <Button fullWidth variant="contained" className="main-bg-color">
            Enviar&nbsp;
            <Send />
          </Button>
        </div>
      </form>
    );
  }
}

export default AddCompany;
