import React from 'react';

import ViewGenerator from './ViewGenerator';

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'Nombre',
        accessor: 'nombre'
      },
      {
        header: 'Apellidos',
        accessor: 'apellidos'
      },
      {
        header: 'DNI',
        accessor: 'dni'
      },
      {
        header: 'Id cine',
        accessor: 'idCine'
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
