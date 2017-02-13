import React from 'react';

import TableComponent from './../components/TableComponent';
import FormContainer from './../components/FormContainer';
import ModalForm from './../components/ModalForm';
import FormActions from './../components/FormActions';
import { selectAll } from './../utils/apiHelper';

class Employees extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      employees: []
    };

this.Column = [
      {
        name: 'ID',
        field: 'idEmpleado'
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
        name: 'Id cine',
        field: 'idCine'
      }
    ];

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    selectAll('employees')
    .then((response) => {
      this.setState({employees: response._embedded.employees})
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
        <h1>Empleados</h1>

        <FormActions handleOpenModal={this.handleOpenModal} refresh={this.refresh}/>

        <TableComponent data={this.state.employees} columns={this.Column} />

        <ModalForm modalTitle="Modal empleado" isOpen={this.state.isOpen} handleCloseModal={this.handleCloseModal}>
          <FormContainer targetTable="p" title="Nuevo empleado" actionButtonText="Crear nuevo empleado"/>
        </ModalForm>
      </div>
    );
  }
}

export default Employees;
