import React, { Component } from 'react';
import { connect } from 'react-redux';
import Central from 'pmenos-react-central';
import { API_CENTRAL } from '../Util';
import { INIT_CENTRAL } from 'pmenos-react-central/dist/reducers/central'

class Footer extends Component {

    componentWillMount() {
        this.props.dispatch({
            type: INIT_CENTRAL,
            payload: {
                sistema: 'ProjetoBase',
                diretoria: 'ENGENHARIA',
                funcao: ''
            }
        });
    }

    render() {
        const { usuario, confirm, sistema, funcao, diretoria, obs, dispatch } = this.props;
        return (
            <div className="container text-xs-center">
                <Central
                    dispatch={dispatch}
                    exibirConfirmacao={confirm}
                    sistema={sistema}
                    funcao={funcao}
                    diretoria={diretoria}
                    obs={obs}
                    usuario={usuario}
                    url={API_CENTRAL}
                />
                <footer>
                    <p>
                        <small>
                            Empreendimentos Pague Menos - Todos os direitos reservados -&nbsp;
                        {new Date().getFullYear()}
                        </small>
                    </p>
                </footer>
            </div>
        );
    }
}

function select(state) {
    return {
        usuario: state.reducers.usuario.matricula,
        confirm: state.reducers.central.confirm,
        sistema: state.reducers.central.sistema,
        funcao: state.reducers.central.funcao,
        diretoria: state.reducers.central.diretoria,
        obs: state.reducers.central.obs
    };
}

export default connect(select)(Footer);
