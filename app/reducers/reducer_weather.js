import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Esta es una instruccion es6 que lo que hace es agregar
            // action.payload.data al array state existente. Es exactamente igual
            // a poner: return state.concat([action.payload.data]).
            // La unica diferencia a concat es que la expresion es6 agrega el nuevo
            // dato al principio del array (top).
            // Recordar que los reducers no pueden mutar a state, siempre deben
            // retornar un state completamente nuevo.
            return [ action.payload.data, ...state ];
            break;
    }
    return state;
}
