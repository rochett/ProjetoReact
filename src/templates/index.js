import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'react-cookie';
import Header from './header';
import Footer from './footer';
import Status from './status';
import { computarChave, cifrarChave, decifrar } from '../cosmos-crypto';
import { ENV_PRODUCTION, ENV } from '../Util';
import { SET_MATRICULA } from '../actions';

/**
 * Main page que carrega cabeçalho, conteúdo, rodapé e a modal loading
 */
class Index extends Component {
    /**
     * Função executada antes do render()
     */
    componentWillMount() {
        this.checkUserStatus();
    }

    /**
     *  Verifica se o usuário está autenticado
     */
    checkUserStatus() {
        const { dispatch } = this.props;

        if (ENV === ENV_PRODUCTION) {
            const cookieCosmos = Cookie.load('cookiejs');
            
            if (cookieCosmos) {          
                const chave = computarChave();
                const chaveCifrada = cifrarChave(chave);
                const cookieDecifrado = decifrar(cookieCosmos, chaveCifrada);

                dispatch({ type: SET_MATRICULA, payload: { matricula: cookieDecifrado } });
            } else {
                this.context.router.push('/login');
            }
        } else {
            dispatch({ type: SET_MATRICULA, payload: { matricula: '72784' } });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div id="main" className="container">
                    {this.props.children}
                </div>
                <Footer />
                <Status />
            </div>
        );
    }
}

Index.contextTypes = {
    router: PropTypes.object
};

export default connect()(Index);
