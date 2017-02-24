import React from 'react';

import ViewGenerator from './ViewGenerator';

class Clients extends React.Component {
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
        header: 'E-mail',
        accessor: 'email'
      }
    ];
  }


  render() {
    return(
      <ViewGenerator title="Clientes" table="clients" columns={this.columns}/>
    );
  }
}

export default Clients;
