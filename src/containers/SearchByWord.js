import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Filter from '../components/widgets/filter/Filter';
import Input from '@material-ui/core/Input';
import MessageMinChars from '../components/shared/MessageMinChars';
import Layout from '../components/shared/Layout';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

class SearchByWord extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.submit = this.submit.bind(this);
  }

  state = {
    word: '',
    category: undefined,
    minChars: 4,
    error: false
  };

  handleChange(value) {
    this.setState({
      word: value,
      error: false
    });
  }

  handleFilter(stringId) {

    console.log('handleFilter');


    // If "word to search" is empty, then pass a mockup word,
    // when modify the URL:
    const word = this.state.word === '' ? 'empty' : this.state.word;

    // Update the state with the selected category:
    this.setState({ category: stringId }, () => {
      // Update the url reflecting the current user selection:
      this.props.history.push(`/home/${word}/${stringId}/`);
    });
  }

  submit() {
    if (this.state.word.length < this.state.minChars) {
      this.setState({ error: true });
      return;
    }
    // Redirect:
    const path = `/buscar/${this.state.word}/${this.state.category}/asc/0`;
    this.props.history.push(path);
  }

  componentWillReceiveProps(newProps) {
    const tempWord = this.props.params.word;
    const _word = !tempWord || tempWord === 'empty' ? '' : tempWord;
    const _category =
      this.props.params.category || this.props.categories[0].string_id;

    this.setState({
      word: _word,
      category: _category
    });
  }

  render() {
    // TODO: Default filter value is hardcoded (Should come in .config).

    return (
      <Layout>
        <Typography variant="h1">¿Qué estás buscando?</Typography>
        <MessageMinChars show={this.state.error} />
        <Input
          autoFocus
          fullWidth
          placeholder="Carpintero, Farmacia, etc..."
          value={this.state.word}
          onChange={event => this.handleChange(event.target.value)}
          onKeyUp={event => {
            if (event.key === 'Enter') {
              this.submit();
            }
          }}
          style={{ marginBottom: 20 }}
        />

        <Filter
          title="Rubro:"
          items={this.props.categories}
          callback={this.handleFilter}
          selected={this.state.category || 'todos'}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.submit}
        >
          Buscar
        </Button>
      </Layout>
    );
  }
}

SearchByWord.propTypes = {
  categories: PropTypes.array.isRequired
};

export default SearchByWord;
