import React, { Component } from 'react';

class SearchByTag extends Component {
  state = {
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className="ContentBox">
        <h2>Buscar por rubro</h2>
      </div>
    );
  }
}

export default SearchByTag;
