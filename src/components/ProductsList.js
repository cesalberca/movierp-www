import React from 'react';

import TableComponent from './TableComponent';
import './ProductsList.css';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/products', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({products: json._embedded.products});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const productsColumn = [
      {
        name: 'ID',
        field: 'idProducto'
      },
      {
        name: 'Nombre',
        field: 'nombre'
      },
      {
        name: 'Precio',
        field: 'precio'
      }
    ];

    return (
        <TableComponent data={this.state.products} columns={productsColumn} />
    );
  }
}

export default ProductsList;
