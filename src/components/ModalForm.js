import React from 'react';

import ReactModal from 'react-modal';

import './ModalForm.css';

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, modalTitle, handleCloseModal, children} = this.props;
    return(
      <ReactModal
        isOpen={isOpen}
        contentLabel={modalTitle}
        className="ModalForm"
        overlayClassName="ModalForm__overlay"
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick={true}>
        {children}
      </ReactModal>
    );
  }
}

export default ModalForm;
