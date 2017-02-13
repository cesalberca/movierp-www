import React from 'react';

import { insert, selectAll, deleteOne } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import DeleteForm from './../components/DeleteForm';
import FormActions from './../components/FormActions';


class Cinemas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [],
      isCreateOpen: false,
      isDeleteOpen: false
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

    this.handleOpenCreateModal = this.handleOpenCreateModal.bind(this);
    this.handleCloseCreateModal = this.handleCloseCreateModal.bind(this);
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  handleOpenCreateModal() {
    this.setState({isCreateOpen: true});
  }

  handleCloseCreateModal() {
    this.setState({isCreateOpen: false});
  }

  handleOpenDeleteModal() {
    this.setState({isDeleteOpen: true});
  }

  handleCloseDeleteModal() {
    this.setState({isDeleteOpen: false});
  }

  handleDelete() {
    console.log('Borrar');
  }

  create() {

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
          handleOpenCreateModal={this.handleOpenCreateModal}
          handleOpenDeleteModal={this.handleOpenDeleteModal}
          refresh={this.refresh}/>

        <TableComponent data={this.state.cinemas} columns={this.columns} />

        <ModalForm
          modalTitle="Crear cine"
          isOpen={this.state.isCreateOpen}
          handleCloseModal={this.handleCloseCreateModal}>
          <FormContainer targetTable="cinemas" title="Nuevo cine" actionButtonText="Crear cine"/>
        </ModalForm>

        <ModalForm
          modalTitle="Borrar cine"
          isOpen={this.state.isDeleteOpen}
          handleCloseModal={this.handleCloseDeleteModal}>
          <DeleteForm title="Borrar cine" actionButtonText="Borrar cine"/>
        </ModalForm>
      </div>
    );
  }
}

export default Cinemas;
