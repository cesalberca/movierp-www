import React from 'react';
import swal from 'sweetalert';

import { selectAll } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import DeleteForm from './../components/DeleteForm';
import EditForm from './../components/EditForm';
import FormActions from './../components/FormActions';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: [],
      selectedCinema: '',
      isLoading: false,
      isCreateOpen: false,
      isDeleteOpen: false,
      isEditOpen: false
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
    this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    this.handleCloseEditModal = this.handleCloseEditModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.load = this.load.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {
    this.load();
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

  handleOpenEditModal() {
    this.setState({isEditOpen: true});
  }

  handleCloseEditModal() {
    this.setState({isEditOpen: false});
  }

  handleRowClick(event, index) {
    const selectedCinema = this.state.cinemas[index];
    this.setState({selectedCinema});
    this.handleOpenEditModal(this.state.selectedCinema);
  }

  load() {
    this.setState({isLoading: true});
    selectAll('cinemas')
    .then((response) => {
      this.setState({cinemas: response});
      this.setState({isLoading: false});
    })
    .catch(error => {
      swal({title: 'No se ha podido conectar con el servidor, inténtalo en otro momento', type: 'error'});
      this.setState({isLoading: false});
    });
  }

  onSubmit() {
    this.load();
    this.handleCloseCreateModal();
  }

  render() {
    return (
      <div>
        <h1>Cines</h1>
        <FormActions
          isLoading={this.state.isLoading}
          handleOpenCreateModal={this.handleOpenCreateModal}
          handleOpenDeleteModal={this.handleOpenDeleteModal}
          handleLoad={this.load}/>

        <TableComponent 
          data={this.state.cinemas} 
          columns={this.columns}
          handleRowClick={this.handleRowClick}/>

        <ModalForm
          modalTitle="Crear cine"
          isOpen={this.state.isCreateOpen}
          handleCloseModal={this.handleCloseCreateModal}>
          <FormContainer onSubmit={this.onSubmit} targetTable="cinemas" title="Nuevo cine" actionButtonText="Crear cine"/>
        </ModalForm>

        <ModalForm
          modalTitle="Borrar cine"
          isOpen={this.state.isDeleteOpen}
          handleCloseModal={this.handleCloseDeleteModal}>
          <DeleteForm targetTable="cinemas" title="Borrar cine" actionButtonText="Borrar cine"/>
        </ModalForm>

        <ModalForm
          modalTitle="Editar cine"
          isOpen={this.state.isEditOpen}
          handleCloseModal={this.handleCloseEditModal}>
          <EditForm targetTable="cinemas" title="Editar cine" actionButtonText="Editar cine"/>
        </ModalForm>
      </div>
    );
  }
}

export default Cinemas;
