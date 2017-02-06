import React from 'react';

import TableComponent from './TableComponent';
import './CinemaRooms.css';

class CinemaRooms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/rooms', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json)
      this.setState({rooms: json._embedded.rooms});
    })
    .catch((error) => {
      // alert('Error al conseguir datos del servidor');
    });
  }

  render() {
    const cinemaRoomsColumn = [
      {
        name: 'ID',
        field: 'idSala'
      },
      {
        name: 'Numero de butacas',
        field: 'numeroButacas'
      }
    ];

    console.log(this.state.rooms);

    return (
        <TableComponent data={this.state.rooms} columns={cinemaRoomsColumn} />
    );
  }
}

export default CinemaRooms;
