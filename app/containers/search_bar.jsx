import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // Esto hace que la funcion onInputChange tenga como contexto this a el
    // componente de react (SearchBar). Sin esto el contexto this es solo el
    // contexto de la misma funcion onInputChange. Por lo tanto al intenar hacer
    // this.setState en la funcion, this será nulo.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // la función está disponible a través de las props, gracias a los metodos
    // mapDispatchToProps y connect, definidos mas abajo.
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
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

// Asegura que la accion fluya hacia los middleware y los reducers.
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Al pasar null como primer parametro indica a redux que no se va a usar o no
// importa el state mantenido por redux en este contenedor (SearchBar).
export default connect(null, mapDispatchToProps)(SearchBar);
