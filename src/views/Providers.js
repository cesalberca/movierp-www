import React from 'react';

import ViewGenerator from './ViewGenerator';

class Providers extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
      },
      {
        name: 'Nombre Comerical',
        field: 'nombre_comerical'
      },
      {
        name: 'Nombre Fiscal',
        field: 'nombre_fiscal'
      },
      {
        name: 'Dirección',
        field: 'direccion'
      },
      {
        name: 'C.I.F.',
        field: 'cif'
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
