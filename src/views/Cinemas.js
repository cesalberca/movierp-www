import React from 'react';

import ViewGenerator from './ViewGenerator';

class Cinemas extends React.Component {
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
        header: 'Cif',
        accessor: 'cif'
      },
      {
        header: 'Dirección',
        accessor: 'direccion'
      },
      {
        header: 'Código postal',
        accessor: 'codigoPostal'
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
