import React from 'react';

import TableComponent from './TableComponent';
import './CinemasList.css';

class CinemasList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cinemas', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json)
      this.setState({cinemas: json._embedded.cinemas});
    })
    .catch((error) => {
      alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const cinemasColumn = [
      {
        name: 'ID',
        field: 'idCine'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Cif',
        field: 'cif'
      },
      {
        name: 'Dirección',
        field: 'direccion'
      },
      {
        name: 'Código postal',
        field: 'codigoPostal'
      }
    ];

    return (
        <TableComponent data={this.state.cinemas} columns={cinemasColumn} />
    );
  }
}

export default CinemasList;
