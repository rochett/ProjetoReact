import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'react-cookie';
import PropTypes from 'prop-types';
import push from 'history/createHashHistory';
import { computarChave, cifrarChave, decifrar } from '../cosmos-crypto';
import { SET_MATRICULA } from '../actions';
import { ENV, ENV_PRODUCTION } from '../Util';

class Login extends Component {

    /**
     * Função executada antes do render()
     */
    componentWillMount = () => {
        this.checkUserStatus();
    };

    /**
     * Redireciona para a tela de login do CosmosNET
     */
    onClickLogin = () => {
        window.location.href = '/CosmosNet';
    };

    /**
     * Verifica se o usuário está autenticado
     */
    checkUserStatus = () => {
        const { dispatch } = this.props;

        if (ENV === ENV_PRODUCTION) {
            const cookieCosmos = Cookie.load('cookiejs');
            
            if (cookieCosmos) {
                const chave = computarChave();
                const chaveCifrada = cifrarChave(chave);
                const cookieDecifrado = decifrar(cookieCosmos, chaveCifrada);

                dispatch({ type: SET_MATRICULA, payload: { matricula: cookieDecifrado } });
                push('/');
            } else {
                push('/login');
            }
        } else {
            dispatch({ type: SET_MATRICULA, payload: { matricula: '72784' } });
            push('/');
        }
    };

    render() {
        return (
            <div id="login" className="container text-xs-center">
                <div className="row">
                    <div className="content col-md-4 offset-md-4">
                        <div className="row">
                            <div className="col-md-12">
                                <p>
                                    <img 
                                        src="./images/logo-pmenos.png" 
                                        role="presentation" 
                                        style={{ width: '100%' }} 
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="row rounded alert alert-warning" role="alert">
                            <div className="col-md-12">
                                <h4>Projeto React JS</h4>
                                <p>Você deve se autenticar para ter acesso ao sistema.
                                 Por favor,
                                  acesse o <strong>CosmosNet</strong> e efetue seu login.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <button 
                                        type="button" 
                                        className="btn btn-primary" 
                                        onClick={this.onClickLogin.bind(this)}
                                    >Acessar CosmosNet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object
};

export default connect()(Login);
