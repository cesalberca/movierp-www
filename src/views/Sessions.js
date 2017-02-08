import React from 'react';

import SessionsList from './../components/SessionsList';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(e) {
    this.setState({isOpen: true})
  }

  handleCloseModal () {
      this.setState({isOpen: false});
  }

  render() {
    return (
      <div>
        <h1>Sesiones</h1>
        <SessionsList />

        <ModalForm isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="sessions" title="New session" actionButtonText="Create new session"/>
        </ModalForm>

        <button onClick={this.handleOpenModal}>Abrir modal</button>
      </div>
    );
  }
}

export default Sessions;