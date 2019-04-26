import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookie from 'react-cookie';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Menu from './menu';
import { ENV, ENV_PRODUCTION } from '../Util';

class Header extends Component {
    /**
     * Desloga o usuário autenticado.
     */
    onClickLogout() {
        if (ENV === ENV_PRODUCTION) {
            Cookie.save('cookiejs', '', -1);
        }
        this.context.router.push('/login');
    }
    //navbar navbar-fixed-top navbar-dark bg-primary
    render() {
        const { usuario } = this.props;
        return (
            <Navbar
                inverse
                collapseOnSelect
                className="navbar-fixed-top navbar-dark bg-primary"
                fluid
            >
                <Navbar.Header >
                    <Navbar.Brand>
                        <Link to="/">
                            <img
                                src="images/logo-pmenos-branca.png"
                                style={{ maxHeight: 24 }}
                                role="presentation"
                            /><small> | Integração Cosmos/SAP</small>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <Menu usuario />
                    </Navbar.Form>
                    <Nav pullRight>
                        {/** Usuário autenticado no sistema */}
                        <NavItem>
                            <p className="nav-link mb-0" style={{ color: '#fff', paddingTop: 0 }} >
                                {
                                    (usuario) ?
                                        <span>
                                            Olá, <span id="user_name">
                                                {usuario.nome}
                                            </span>
                                        </span>
                                        : ''
                                }
                            </p>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
Header.contextTypes = {
    router: PropTypes.object
};

function select(state) {
    return {
        usuario: state.reducers.usuario
    };
}

export default connect(select)(Header);

