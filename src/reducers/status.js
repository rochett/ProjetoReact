import {
    FETCH_FAILED,
    FETCH_SUCCESS,
    HIDE_MODAL_ALERT,
    FETCH_PROCCESS } from '../actions';

/**
 * Reducer que gerencia actions relacionadas a modal de status
 */
function status(state = [], action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return success(state, action);

        case FETCH_PROCCESS:
            return proccess(state, action);

        case FETCH_FAILED:
            return failed(state, action);
        case HIDE_MODAL_ALERT:
            return hideModal(state, action);            
        default:
            return state;
    }
}

function success(state, action) {
    return hideModal(state, action);
}

function proccess(state, action) {
    if (action.payload && action.payload.autohide) {
        window.setTimeout(hideModal, 3000);
    }

    return {
        icon: 'fa fa-cog fa-2x fa-spin fa-fw',
        className: 'alert-info',
        message: (action.payload && action.payload.message) ?
            action.payload.message : 'Processando, aguarde.',
        showModal: true
    };
}

function failed(state, action) {
    try {
        const jsonError = JSON.parse(action.payload.message);
        return {
            icon: 'fa fa-close fa-2x',
            className: 'alert-danger',
            message: (jsonError && jsonError.message) ?
                jsonError.message : 'Erro na solicitação. Consulte o log para detalhes.',
            autohide: true,
            showModal: true
        };
    } catch (error) {
        let mensagem;
        if (action.payload && action.payload.message) {
            mensagem = (action.payload.message === 'Failed to fetch') ?
             'Falha na conexão' : action.payload.message;
        } else {
            mensagem = 'Erro na solicitação. Consulte o log para detalhes.';
        }
            
        return {
            icon: 'fa fa-close fa-2x',
            className: 'alert-danger',
            message: mensagem,
            autohide: true,
            showModal: true
        };
    }
}

function hideModal() {
    return {
        icon: '',
        className: '',
        message: '',
        showModal: false
    };
}

export default status;
