import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // Esto hace que la funcion onInputChange tenga como contexto this a el
    // componente de react (SearchBar). Sin esto el contexto this es solo el
    // contexto de la misma funcion onInputChange. Por lo tanto al intenar hacer
    // this.setState en la funcion, this será nulo.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="5 dias de pronosticos en su ciudad favorita"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Buscar</button>
        </span>
      </form>
    );
  }
}
