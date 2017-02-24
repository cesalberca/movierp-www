import React from 'react';

import ViewGenerator from './ViewGenerator';

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id',
      },
      {
        header: 'Rol',
        accessor: 'rol'
      },
      {
        header: 'Nombre',
        accessor: 'nombre'
      },
      {
        header: 'Contraseña',
        accessor: 'contrasena'
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
