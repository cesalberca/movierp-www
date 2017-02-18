import React from 'react';

import ViewGenerator from './ViewGenerator';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
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
  }

  render() {
    return(
      <ViewGenerator title="Productos" table="products" columns={this.columns}/>
    );
  }
}

export default Products;
