import React from 'react';

import TableComponent from './TableComponent';
import './Clients.css';

class Clients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Clients: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/clients', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({clients: json._embedded.clients});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const clientsColumn = [
      {
        name: 'ID',
        field: 'idCliente'
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

    return (
        <TableComponent data={this.state.clients} columns={clientsColumn} />
    );
  }
}

export default Clients;