import { takeEvery } from 'redux-saga/effects';
import { API_CENTRAL, fetchUrl } from '../Util';

/**
 * Essa consulta é realizada só para falhar e assim rodar o chamado para a central.
 */
export function* getTeste(action) {
    const url = `${API_CENTRAL}Chamado?teste=${action.payload.objeto}`;
    
    yield fetchUrl(url, 'SET_TESTE_SUCCESS');
}

/**
 * Escuta a action GET_TESTE e dispara a consulta de testes
 */
export function* watchGetTeste() {
    yield takeEvery('GET_TESTE', getTeste);
}
