import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FilterBox from '../search/FilterBox';
import '../../css/MainLayout.css';

class SearchByWord extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.submit = this.submit.bind(this);
  }

  state = {
    word: '',
    category: -1,
    minChars: 4,
    error: false
  };

  handleKeyUp(event) {
    const word = event.target.value;
    this.setState({
      word,
      error: false
    });
  }

  handleFilter(id) {
    this.setState({ category: id });
  }

  submit() {
    if (this.state.word.length < this.state.minChars) {
      this.setState({ error: true });
      return;
    }
    // Redirect:
    const path = `/buscar/${this.state.word}/${this.state.category}/asc`;
    this.props.history.push(path);
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
    /*  const params = this.props.params;
    if (params.word) {
      this.setState({
        word: params.word || '',
        category: params.category
      });
    } */
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
