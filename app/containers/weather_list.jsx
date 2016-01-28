import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(dataCiudad) {
        const nombreCiudad = dataCiudad.city.name;
        // para cada elemento de dataCiudad.list, guarda al propiedad temp
        // del objeto weather.
        const temps = dataCiudad.list.map(weather => weather.main.temp);
        const presiones = dataCiudad.list.map(weather => weather.main.pressure);
        const humedades = dataCiudad.list.map(weather => weather.main.humidity);
        /* Se reemplazan las dos intrucciones por la que le sigue para usar es6
        const lon = dataCiudad.city.coord.lon;
        const lat = dataCiudad.city.coord.lat;
        */
        const {lon, lat } = dataCiudad.city.coord;
        
        return (
            <tr key={nombreCiudad}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={presiones} color="green" units="hPa"/></td>
                <td><Chart data={humedades} color="black" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-header">
                <thead>
                    <tr>
                        <th>Ciudad</th>
                        <th>Temperatura (K)</th>
                        <th>Presión (hPa)</th>
                        <th>Humedad (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// state.weather viene del reducer reducer_weahter y es seteado como propiedad
// weather de state en reducer/index.js
/*
function mapStateToProps(state) {
    return {weather: state.weather};
}
*/

// Y utilizando es6 la funcion comentada arriba queda asi:
// en donde el nombre del parametro seria state.wheather pero se puede poner
// directamente weather, y en el return en lugar de asignar weather: state.weather
// podria quedar como weather: weather, pero como se llaman iguales se puede poner
// simplemente weather.
function mapStateToProps({weather}) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
