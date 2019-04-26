import { all } from 'redux-saga/effects';
import { watchGetInfoUsuario } from './usuario';
import { watchGetTeste } from './teste';
/**
 * Importa os observadores de actions
 */
export default function* rootSaga() {
    yield all([
        watchGetInfoUsuario(),
        watchGetTeste()
    ]);
}
