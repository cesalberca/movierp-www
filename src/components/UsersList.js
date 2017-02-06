import React from 'react';

import TableComponent from './TableComponent';
import './UsersList.css';

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/users', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({users: json._embedded.users});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const usersColumn = [
      {
        name: 'ID',
        field: 'idUsuario'
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
      },

    ];

    return (
        <TableComponent data={this.state.users} columns={usersColumn} />
    );
  }
}

export default UsersList;
