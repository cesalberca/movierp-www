import React from 'react';

import { selectAll } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';


class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isOpen: false
    };

    this.columns = [
      {
        name: 'ID',
        field: 'idProducto'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Precio',
        field: 'precio'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  handleOpenModal() {
    this.setState({isOpen: true});
  }

  handleCloseModal() {
    this.setState({isOpen: false});
  }

  refresh() {
    selectAll('products')
    .then((response) => {
      this.setState({products: response})
    });
  }

  render() {
    return (
      <div>
        <h1>Productos</h1>

        <FormActions handleOpenModal={this.handleOpenModal} refresh={this.refresh}/>

        <TableComponent data={this.state.products} columns={this.columns} />

        <ModalForm modalTitle="Modal productos" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="products" title="New productos" actionButtonText="Crear nuevo producto"/>
        </ModalForm>
      </div>
    );
  }
}

export default Products;
