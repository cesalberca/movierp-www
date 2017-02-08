import React from 'react';

import CinemasList from './../components/CinemasList';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';

class Cinemas extends React.Component {
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
        <h1>Cines</h1>
        <CinemasList />

        <ModalForm isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="cinemas" title="New cinema" actionButtonText="Create new cinema"/>
        </ModalForm>

        <button onClick={this.handleOpenModal}>Abrir modal</button>
      </div>
    );
  }
}

export default Cinemas;
