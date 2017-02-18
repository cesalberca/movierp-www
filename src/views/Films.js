import React from 'react';

import ViewGenerator from './ViewGenerator';

class Films extends React.Component {
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
        name: 'Sinopsis',
        field: 'sinopsis'
      },
      {
        name: 'Duracion',
        field: 'duracion'
      }
    ];
  }

  render() {
    return(
      <ViewGenerator title="Películas" table="films" columns={this.columns}/>
    );
  }
}

export default Films;
