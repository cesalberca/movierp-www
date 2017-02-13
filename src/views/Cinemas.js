import React from 'react';

import { insert, selectAll, deleteOne } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';


class Cinemas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [],
      isOpen: false
    };

    this.columns = [
      {
        name: 'ID',
        field: 'idCine'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Cif',
        field: 'cif'
      },
      {
        name: 'Dirección',
        field: 'direccion'
      },
      {
        name: 'Código postal',
        field: 'codigoPostal'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete() {
    console.log('Borrar');
  }

  refresh() {
    selectAll('cinemas')
    .then((response) => {
      this.setState({cinemas: response})
    });
  }

  render() {
    return (
      <div>
        <h1>Cines</h1>
        <FormActions
          handleOpenModal={this.handleOpenModal}
          refresh={this.refresh}
          handleDelete={this.handleDelete}/>

        <TableComponent data={this.state.cinemas} columns={this.columns} />

        <ModalForm modalTitle="Modal cines" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="cinemas" title="Nuevo cine" actionButtonText="Crear cine"/>
        </ModalForm>

        <ModalForm modalTitle="Borrar cine" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="cinemas" title="New cinema" actionButtonText="Borrar cine"/>
        </ModalForm>
      </div>
    );
  }
}

export default Cinemas;
