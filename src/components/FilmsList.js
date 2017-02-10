import React from 'react';

import TableComponent from './TableComponent';

class FilmsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/films', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({films: json._embedded.films});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render() {
    const FilmsListColumn = [
       {
        name: 'ID',
        field: 'idPelicula'
      },
      {
        name: 'Título',
        field: 'nombre'
      },
      {
        name: 'Sinopsis',
        field: 'sinopsis'
      },
      {
        name: 'Duración (min)',
        field: 'duracion'
      }
    ];

    return (
        <TableComponent data={this.state.films} columns={FilmsListColumn} />
    );
  }
}

export default FilmsList;
