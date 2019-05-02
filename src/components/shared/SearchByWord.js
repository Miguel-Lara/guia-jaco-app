import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import FilterBox from '../search/FilterBox';
import '../../css/MainLayout.css';

/* 
// Levantar el valor del input:

import { useState } from 'react';

function myFunctionalComponentFunction() {
  const [input, setInput] = useState(''); // '' is the initial state value
  return (
    <div>
    <label>Please specify:</label>
    <input value={input} onInput={e => setInput(e.target.value)/>
    </div>
  );
}

*/

class SearchByWord extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.submit = this.submit.bind(this);
  }

  state = {
    word: '',
    category: '',
    error: false
  };

  handleKeyUp(event) {
    const word = event.target.value;
    console.log(word);
    // this.setState({
    //   word,
    //   error: false
    // });
  }

  handleFilter(id) {
    this.setState({ category: id });
  }

  submit() {
    // TODO: Pasar el 4 a suna variable.
    if (this.state.word.length < 4) {
      this.setState({ error: true });
      return;
    }

    /* // Redirect:
    const path = `/buscar/${this.state.word}/${this.state.category}/0`;
    console.log(this.props.history.push(path)); */
  }

  setMessage() {
    let msg = '';
    if (this.state.error) {
      msg = (
        <span className="error-color">
          Tienes que escribir una palabra
          <br />
          de al menos 4 letras
        </span>
      );
    }
    return msg;
  }

  componentDidMount() {
    const params = this.props.params;
    if (params) {
      this.setState({
        word: params.word || '',
        category: params.category
      });
    }
  }

  render() {
    return (
      <div className="ContentBox">
        <h1>¿Qué estás buscando?</h1>
        {this.setMessage()}
        <Input
          autoFocus
          className="ContentBox_input"
          placeholder="Carpintero, Farmacia, etc..."
          onKeyUp={this.handleKeyUp}
          // value={this.state.word} // TODO: Initial value.
        />

        <FilterBox
          title="Rubro"
          items={this.props.categories}
          cb={this.handleFilter}
          selected={this.state.category}
        />

        <Button
          variant="contained"
          size="large"
          color="primary"
          className="SearchButton main-bg-color"
          onClick={this.submit}
        >
          Buscar
        </Button>
      </div>
    );
  }
}

export default SearchByWord;
