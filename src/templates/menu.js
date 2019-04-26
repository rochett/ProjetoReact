import React, { Component } from 'react';
import {
    ButtonToolbar,
    Dropdown,
    MenuItem
} from 'react-bootstrap';
import FaBars from 'react-icons/lib/fa/bars';
import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaFileTextO from 'react-icons/lib/fa/file-text-o';

class Menu extends Component {

    render() {
        return (
            <ButtonToolbar>
                <Dropdown id="dropdown-custom-1">
                    <Dropdown.Toggle
                        bsStyle="primary"
                    >
                        <FaBars style={{ color: '#FFF' }} />
                    </Dropdown.Toggle>
                        {/** Controle dos itens se o usuário está logado */}
                        {(this.props.usuario) ?
                            <Dropdown.Menu className="super-colors">
                                <MenuItem eventKey="2" href="#"><FaFileTextO /> Solicitações</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="7" href="http://cosmosnet.pmenos.com.br/cosmosnet" ><FaSignOut /> Sair</MenuItem>
                            </Dropdown.Menu>
                            :
                            <Dropdown.Menu className="super-colors">
                                <MenuItem eventKey="1" href="#/login">Acessar</MenuItem>
                            </Dropdown.Menu>
                        }
                </Dropdown>
            </ButtonToolbar>
        );
    }
}

export default Menu;
