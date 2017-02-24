import React from 'react';
import swal from 'sweetalert';

import { selectAll } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import DeleteForm from './../components/DeleteForm';
import EditForm from './../components/EditForm';
import FormActions from './../components/FormActions';

/**
 * The view generator recieves column data and the name of the table it references
 * then it creates all the components needed for a default view.
 *
 * Cool stuff 😎
 */
class ViewGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      selectedData: {},
      isLoading: false,
      isCreateOpen: false,
      isDeleteOpen: false,
      isEditOpen: false
    };

    this.columns = this.props.columns;

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

  handleRowClick(index) {
    const selectedData = this.state.data[index];
    this.setState({selectedData});
    this.handleOpenEditModal();
  }

  load() {
    this.setState({isLoading: true});
    selectAll(this.props.table)
    .then((response) => {
      this.setState({data: response});
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
    this.handleCloseEditModal();
  }

  render() {
    const { title, table } = this.props;
    return(
      <div>
        <h1>{title}</h1>
        <FormActions
          isLoading={this.state.isLoading}
          handleOpenCreateModal={this.handleOpenCreateModal}
          handleOpenDeleteModal={this.handleOpenDeleteModal}
          handleLoad={this.load}/>

        <TableComponent
          data={this.state.data}
          columns={this.columns}
          handleRowClick={this.handleRowClick}/>

        <ModalForm
          modalTitle={`Crear ${title}`}
          isOpen={this.state.isCreateOpen}
          handleCloseModal={this.handleCloseCreateModal}>
          <FormContainer onSubmit={this.onSubmit} targetTable={table} title={`Nuevo ${title}`} actionButtonText={`Crear ${title}`}/>
        </ModalForm>

        <ModalForm
          modalTitle={`Borrar ${title}`}
          isOpen={this.state.isDeleteOpen}
          handleCloseModal={this.handleCloseDeleteModal}>
          <DeleteForm targetTable={table} title={`Borrar ${title}`} actionButtonText={`Borrar ${title}`}/>
        </ModalForm>

        <ModalForm
          modalTitle={`Editar ${title}`}
          isOpen={this.state.isEditOpen}
          handleCloseModal={this.handleCloseEditModal}>
          <EditForm onSubmit={this.onSubmit} targetTable={table} data={this.state.selectedData} title={`Editar ${title}`} actionButtonText={`Editar ${title}`}/>
        </ModalForm>
      </div>
    );
  }
}

export default ViewGenerator;
