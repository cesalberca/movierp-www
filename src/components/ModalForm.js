import React from 'react';

import ReactModal from 'react-modal';

import './ModalForm.css';

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ReactModal
                isOpen={this.props.isOpen}
                contentLabel="Example Modal"
                className="ModalForm"
                overlayClassName="ModalForm__overlay"
                onRequestClose={this.props.handleCloseModal}
                shouldCloseOnOverlayClick={true}
                role="dialog"
            >
                {this.props.children}
            </ReactModal>
        );
    }
}

export default ModalForm;
