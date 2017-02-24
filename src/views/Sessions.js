import React from 'react';

import ViewGenerator from './ViewGenerator';

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'Fecha comienzo',
        accessor: 'fechaComienzo'
      },
      {
        header: 'ID Sala',
        accessor: 'idSala'
      },
      {
        header: 'ID Película',
        accessor: 'idPelicula'
      }
    ]
  }

  render() {
    return(
      <ViewGenerator title="Sesiones" table="sessions" columns={this.columns}/>
    );
  }
}

export default Sessions;
