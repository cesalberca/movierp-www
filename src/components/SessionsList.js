import React from 'react';

import TableComponent from './TableComponent';

class SessionsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessions: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/sessions', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({sessions: json._embedded.sessions});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const sessionsColumn = [
      {
        name: 'ID',
        field: 'id_sesion'
      },
      {
        name: 'Id Película',
        field: 'nombre'
      },
      {
        name: 'Id Sala',
        field: 'cif'
      },
      {
        name: 'Fecha comienzo',
        field: 'direccion'
      }
    ];

    return (
        <TableComponent data={this.state.sessions} columns={sessionsColumn} />
    );
  }
}

export default SessionsList;
