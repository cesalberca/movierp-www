import React from 'react';

import ViewGenerator from './ViewGenerator';

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'ID Proveedor',
        accessor: 'idProveedor'
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
