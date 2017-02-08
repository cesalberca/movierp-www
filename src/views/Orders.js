import React from 'react';

import OrdersList from './../components/OrdersList';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';

class Orders extends React.Component {
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
        <h1>Orders</h1>
        <OrdersList />

        <ModalForm isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="orders" title="New order" actionButtonText="Create new order"/>
        </ModalForm>

        <button onClick={this.handleOpenModal}>Abrir modal</button>
      </div>
    );
  }
}

export default Orders;