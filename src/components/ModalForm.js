import React from 'react';

import ReactModal from 'react-modal';

import './ModalForm.css';

const ModalForm = ({isOpen, modalTitle, handleCloseModal, children}) => {
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

export default ModalForm;
