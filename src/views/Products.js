import React from 'react';

import ProductsList from './../components/ProductsList';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';

class Products extends React.Component {
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
        <h1>Productos</h1>
        <ProductsList />

        <ModalForm isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="products" title="New product" actionButtonText="Create new product"/>
        </ModalForm>

        <button onClick={this.handleOpenModal}>Abrir modal</button>
      </div>
    );
  }
}

export default Products;