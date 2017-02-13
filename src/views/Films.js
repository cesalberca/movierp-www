import React from 'react';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';
import { selectAll } from './../utils/apiHelper';

class Films extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      films: []
    };

this.Column = [
      {
        name: 'ID',
        field: 'idPelicula'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Sinopsis',
        field: 'sinopsis'
      },
      {
        name: 'Duracion',
        field: 'duracion'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    selectAll('films')
    .then((response) => {
      this.setState({films: response})
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
        <h1>Películas</h1>

        <FormActions handleOpenModal={this.handleOpenModal} refresh={this.refresh}/>

        <TableComponent data={this.state.clients} columns={this.Column} />

        <ModalForm modalTitle="Modal peliculas" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="p" title="Nueva película" actionButtonText="Crear nueva película"/>
        </ModalForm>
      </div>
    );
  }
}

export default Films;
