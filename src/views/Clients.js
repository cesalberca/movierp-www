import React from 'react';

import ViewGenerator from './ViewGenerator';

class Clients extends React.Component {
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
        name: 'E-mail',
        field: 'email'
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
