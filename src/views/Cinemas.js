import React from 'react';

import ViewGenerator from './ViewGenerator';

class Cinemas extends React.Component {
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
  }

  render() {
    return (
      <ViewGenerator title="Cines" table="cinemas" columns={this.columns}/>
    );
  }
}

export default Cinemas;
