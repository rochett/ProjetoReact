import { put } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import { FETCH_FAILED, SET_CENTRAL } from './actions';
// Variáveis globais informadas no arquivo de configuração do webpack
export const ENV = process.env.NODE_ENV;
export const ENV_PRODUCTION = 'production';
export const ENV_DEVELOPMENT = 'development';
export const API_USUARIO = process.env.REACT_APP_API_USUARIO;
export const API_CENTRAL = process.env.REACT_APP_API_CENTRAL;
/**
 * Função para transformar um objeto em parâmetros de url (var1=valor1)
 * 
 * @export
 * @param {any} obj
 * @returns
 */
export function serializeObjToUrl(obj) {
    return `?${Object.keys(obj).reduce(
        (a, k) => {
            a.push(`${k}=encodeURIComponent(${obj[k]})`);
            return a;
        }, []).join('&')}`;
}

/**
 * Função para transformar apenas a primeira letra de cada palavra em caixa alta
 * 
 * @export
 * @param {any} str
 * @returns
 */
export function toTitleCase(str) {
    return str.replace(/\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

/**
 * Executa uma requisição a uma url usando Fetch.
 * 
 * @export
 * @param {string} url
 * @param {object} [parametros={}]
 * @param {string} returnAction
 * @param {string} [errorAction="FETCH_FAILED"]
 * @param {object} callback
 */
export function* fetchUrl(url,
    returnAction,
    errorAction = FETCH_FAILED,
    parametros = {},
    callback) {
    try {
        const data = yield fetch(url, parametros);
        const jsonData = yield data.json();

        if (data.status < 200 || data.status >= 300) {
            console.log(jsonData);
            if (jsonData !== null && typeof jsonData === 'object' && jsonData.StackTraceString && jsonData.Message && jsonData.Message !== 'Unexpected end of JSON input') {
                let err = jsonData;
                err['funcao'] = url;
                err['parametros'] = parametros;
                yield put({ type: SET_CENTRAL, payload: err });
            }

            throw new Error(JSON.stringify(jsonData));
        }
        yield put({ type: returnAction, payload: jsonData });

        if (callback) {
            yield put(callback);
        }
    } catch (error) {
        error['funcao'] = url;
        error['parametros'] = parametros;
        error['StackTraceString'] = error.stack;
        error['Message'] = error.message;
        delete error.message;
        yield put({ type: SET_CENTRAL, payload: error });
        yield put({ type: errorAction, payload: error });
    }
}

/**
 * Retorna uma lista de WorkItems ordenados pela prioridade e pela ordem
 */
export function sortWorkItemsByPriority(workItems, ordemCrescente = true) {
    const workItemsSorted = workItems.sort((a, b) => {
        if (ordemCrescente) {
            return (b.fields.Priority < a.fields.Priority) ? 1 : -1;
        }
        return (a.fields.Priority < b.fields.Priority) ? 1 : -1;
    });

    return workItemsSorted;
}

/**
 * Formatar a data
 */
export function formatDate(dateTime) {
    if (dateTime) {
        const date = new Date(dateTime);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        day = day < 10 ? `0${day}` : day;
        return `${day}`.concat('/', month, '/', date.getFullYear());
    }
    return '-';
}

/**
 * Verifica se o valor passado é numérico.
 * @param {any} value
 * @returns {boolean}
 */
export function isNumber(value) {
    return !isNaN(parseInt(value, 0)) && isFinite(value);
}