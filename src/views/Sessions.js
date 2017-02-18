import React from 'react';

import ViewGenerator from './ViewGenerator';

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
      },
      {
        name: 'Fecha comienzo',
        field: 'fechaComienzo'
      },
      {
        name: 'ID Sala',
        field: 'idSala'
      },
      {
        name: 'ID Película',
        field: 'idPelicula'
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
