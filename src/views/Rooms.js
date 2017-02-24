import React from 'react';

import ViewGenerator from './ViewGenerator';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        header: 'ID',
        accessor: 'id'
      },
      {
        header: 'Nº Butacas',
        accessor: 'numeroButacas'
      },
      {
        header: 'Id cine',
        accessor: 'idCine'
      }
    ];
  }

  render() {
    return(
      <ViewGenerator title="Salas" table="rooms" columns={this.columns}/>
    );
  }
}

export default Rooms;
