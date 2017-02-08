import React from 'react';

import TableComponent from './TableComponent';
import './ProvidersList.css';

class ProvidersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      providers: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/providers', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({providers: json._embedded.providers});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render() {
    const providersColumn = [
       {
        name: 'ID Proveedor',
        field: 'idProveedor'
      }, 
      {
        name: 'Nombre comercial',
        field: 'nombre_comerical'
      },
      {
        name: 'Nombre fiscal',
        field: 'nombre_fiscal'
      },
      {
        name: 'Dirección',
        field: 'direccion'
      },
      {
        name: 'CIF',
        field: 'cif'
      }
    ];

    return (
        <TableComponent data={this.state.providers} columns={providersColumn} />
    );
  }
}

export default ProvidersList;
