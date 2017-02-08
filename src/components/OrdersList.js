import React from 'react';

import TableComponent from './TableComponent';
import './OrdersList.css';

class OrdersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
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
      // console.log(json)
      this.setState({orders: json._embedded.orders});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render () {
    const ordersColumn = [
      {
        name: 'ID',
        field: 'id_pedido'
      },
      {
        name: 'Id proveedor',
        field: 'id:proveedor'
      }
    ];

    return (
        <TableComponent data={this.state.orders} columns={ordersColumn} />
    );
  }
}

export default OrdersList;
