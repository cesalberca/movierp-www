import React from 'react';

import ViewGenerator from './ViewGenerator';

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
      },
      {
        name: 'ID Proveedor',
        field: 'idProveedor'
      }
    ];
  }

  render() {
    return (
      <ViewGenerator title="Pedidos" table="orders" columns={this.columns}/>
    );
  }
}

export default Orders;
