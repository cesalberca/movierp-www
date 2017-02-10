import React from 'react';

import CinemasList from './../components/CinemasList';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({isOpen: true});
  }

  handleCloseModal() {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div>
        <h1>Cines</h1>

        <FormActions handleOpenModal={this.handleOpenModal}/>

        <CinemasList />

        <ModalForm modalTitle="Modal cines" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="cinemas" title="New cinema" actionButtonText="Create new cinema"/>
        </ModalForm>
      </div>
    );
  }
}

export default Cinemas;
