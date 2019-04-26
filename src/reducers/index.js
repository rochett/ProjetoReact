import { combineReducers } from 'redux';
import central from 'pmenos-react-central/dist/reducers/central';
import status from './status';
import usuario from './usuario';

/**
 * Importa os reducers
 */
const storeApp = combineReducers({
    status,
    usuario,
    central
});

export default storeApp;
