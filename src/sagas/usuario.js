import { takeEvery } from 'redux-saga/effects';
import { SET_INFO_USUARIO } from '../actions';
import { API_USUARIO, fetchUrl } from '../Util';

/**
 * Consulta informações do usuário informado no payload
 */
export function* getInfoUsuario(consulta) {
    const url = API_USUARIO + consulta.payload.matricula;
    const returnAction = SET_INFO_USUARIO;
    yield fetchUrl(url, returnAction);
}

/**
 * Escuta a action SET_MATRICULA e dispara a consulta de informações do usuário
 */
export function* watchGetInfoUsuario() {
    yield takeEvery('SET_MATRICULA', getInfoUsuario);
}
