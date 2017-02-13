import React from 'react';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';
import { selectAll } from './../utils/apiHelper';

class Clients extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      clients: []
    };

this.Column = [
      {
        name: 'ID',
        field: 'idCliente'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Apellidos',
        field: 'apellidos'
      },
      {
        name: 'DNI',
        field: 'dni'
      },
      {
        name: 'E-mail',
        field: 'email'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    selectAll('clients')
    .then((response) => {
      this.setState({cinemas: response._embedded.cinemas})
    });
  }

  handleOpenModal() {
    this.setState({isOpen: true});
  }

  handleCloseModal() {
    this.setState({isOpen: false});
  }

  refresh() {

  }

render() {
    return (
      <div>
        <h1>Clientes</h1>

        <FormActions handleOpenModal={this.handleOpenModal} refresh={this.refresh}/>

        <TableComponent data={this.state.clients} columns={this.Column} />

        <ModalForm modalTitle="Modal cines" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="p" title="Nueva cliente" actionButtonText="Crear nuevo cliente"/>
        </ModalForm>
      </div>
    );
  }
}

export default Clients;
