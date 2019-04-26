import { SET_MATRICULA, SET_INFO_USUARIO } from '../actions';
import { toTitleCase } from '../Util';

/**
 * Reducer que gerencia actions relacionadas ao usuário autenticado
 * 
 * @param {any} [state=[]]
 * @param {any} action
 * @returns
 */
function usuario(state = [], action) {
    switch (action.type) {
        case SET_MATRICULA:
            return setMatricula(state, action);
        case SET_INFO_USUARIO:
            return setInfoUsuario(state, action);
        default:
            return state;
    }
}

/**
 * Armazena a matrícula presente no cookie do CosmosNET
 */
function setMatricula(state, action) {
    let nome = (state.login && state.login.nome) ? state.login.nome : action.payload.matricula;
    nome = toTitleCase(nome); 
    return {
        matricula: action.payload.matricula,
        nome 
    };
}

/**
 * Armazena o nome do usuário referente a matrícula, localizado na API Usuário
 */
function setInfoUsuario(state, action) {
    let nome = (action.payload.nomeFantasia) ? action.payload.nomeFantasia : state.login.matricula;
    nome = toTitleCase(nome); 

    return {
        matricula: (action.payload.codigo) ? action.payload.codigo : state.login.matricula,
        nome
    };
}

export default usuario;
