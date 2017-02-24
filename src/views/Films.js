import React from 'react';

import ViewGenerator from './ViewGenerator';

class Films extends React.Component {
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
        header: 'Sinopsis',
        accessor: 'sinopsis'
      },
      {
        header: 'Duracion',
        accessor: 'duracion'
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
