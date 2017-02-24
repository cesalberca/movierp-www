import React from 'react';

import ViewGenerator from './ViewGenerator';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'Nombre',
        accessor: 'nombre'
      },
      {
        header: 'Precio',
        accessor: 'precio'
      }
    ];
  }

  render() {
    return(
      <ViewGenerator title="Productos" table="products" columns={this.columns}/>
    );
  }
}

export default Products;
