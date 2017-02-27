import React from 'react';

import ViewGenerator from './ViewGenerator';

class Providers extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'Nombre Comercial',
        accessor: 'nombre_comercial'
      },
      {
        header: 'Nombre Fiscal',
        accessor: 'nombre_fiscal'
      },
      {
        header: 'Dirección',
        accessor: 'direccion'
      },
      {
        header: 'C.I.F.',
        accessor: 'cif'
      }
    ];
  }

  render() {
    return(
      <ViewGenerator title="Proveedores" table="providers" columns={this.columns}/>
    );
  }
}

export default Providers;
