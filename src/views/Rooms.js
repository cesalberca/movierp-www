import React from 'react';

import { selectAll } from './../utils/apiHelper';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';


class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      isOpen: false
    };

    this.columns = [
      {
        name: 'ID',
        field: 'idSala'
      },
      {
        name: 'Nº Butacas',
        field: 'numeroButacas'
      },
      {
        name: 'Id cine',
        field: 'idCine'
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
    selectAll('rooms')
    .then((response) => {
      this.setState({rooms: response})
    });
  }

  render() {
    return (
      <div>
        <h1>Salas</h1>
        <FormActions
          handleOpenModal={this.handleOpenModal}
          refresh={this.refresh}
          handleDelete={this.handleDelete}/>

        <TableComponent data={this.state.rooms} columns={this.columns} />

        <ModalForm modalTitle="Modal Salas" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="rooms" title="Nueva sala" actionButtonText="Crear sala"/>
        </ModalForm>

        <ModalForm modalTitle="Borrar cine" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="rooms" title="Nueva sala" actionButtonText="Borrar sala"/>
        </ModalForm>
      </div>
    );
  }
}


export default Rooms;
