import React from 'react';

import ViewGenerator from './ViewGenerator';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id',
      },
      {
        name: 'Rol',
        field: 'rol'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Contraseña',
        field: 'contrasena'
      }
    ];
  }

  render() {
    return(
      <ViewGenerator title="Usuarios" table="users" columns={this.columns}/>
    );
  }
}

export default Users;
