import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { HIDE_MODAL_ALERT } from '../actions';

class Status extends Component {

    componentDidUpdate = () => {
        const { autohide } = this.props;
        
        if (autohide) { 
            window.setTimeout(this.hideModal, 3000);
        }
    }

    hideModal = () => {
       const { dispatch } = this.props;
       dispatch({ type: HIDE_MODAL_ALERT, showModal: false });
    }

    render() {
        const { className, icon, message, showModal } = this.props;

        return (
            <Modal show={showModal} onHide={this.close}>
                <Modal.Body className={`${className} rounded`}>
                    <p 
                        className="label-loading" 
                        style={{ margin: 0 }}
                    >
                        <i className={icon} /> {message}
                    </p>
                </Modal.Body>
            </Modal>
        );
    }
}

function select(state) {
    return {
        icon: state.reducers.status.icon,
        className: state.reducers.status.className,
        message: state.reducers.status.message,
        showModal: state.reducers.status.showModal,
        autohide: state.reducers.status.autohide
    };
}

export default connect(select)(Status);

