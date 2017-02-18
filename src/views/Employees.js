import React from 'react';

import ViewGenerator from './ViewGenerator';

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
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
  }

  render() {
    return(
      <ViewGenerator title="Empleados" table="employees" columns={this.columns}/>
    );
  }
}

export default Employees;
