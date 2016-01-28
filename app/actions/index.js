import axios from 'axios';

const API_KEY = "f0fad9161dbf5744558f9b95931dc8cb";

// El signo ` es una funcionalidad nueva de es6 (template string), permite inyectar
// una variable javascript dentro de un string.
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Se crea una constante para el tipo (type) de action creator para mantener
// una consistencia en el nombre de la acción entre el action creator y los reducers.
export const FETCH_WEATHER = "FETCH_WEATHER";

// este es un "action creator".
export function fetchWeather(ciudad) {
    const url = `${ROOT_URL}&q=${ciudad},ar`;
    const request = axios.get(url);

    // En el payload ira el request como promise. En los reducers ese promise
    // será recibido como el resultado real del request.
    // Este es el funcionamiento de redux-promise.
    // Redux-promise es un middleware y los middleware tiene la habilidad de
    // parar una acción y manipularla antes de ser enviada a los reducers.
    // Redux-promise ve venir esta acción y se fija especificamente en el payload
    // si el payload es un promise, redux-promise hace un stop total de la acción
    // hasta que el request sea completado totalmente.
    // Cuando se completo totalmente, hace el dispatch de la acción con el dato
    // real retornado del request en payload hacia todos los reducers.
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
