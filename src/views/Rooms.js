import React from 'react';

import ViewGenerator from './ViewGenerator';

class Rooms extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        name: 'ID',
        field: 'id'
      },
      {
        name: 'Nº Butacas',
        field: 'numeroButacas'
      },
      {
        name: 'Id cine',
        field: 'idCine'
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
