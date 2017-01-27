import React from 'react';

import './CinemasList.css';

class CinemasList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cinemas: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cinemas', {
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json)
      this.setState({cinemas: json._embedded.cinemas});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render () {
    const cinemasList = this.state.cinemas.map((cinema) => {
      return <li key={cinema._links.self.href}>Cinema: {cinema.nombre}</li>
    });

    return (
        <ul>{cinemasList}</ul>
    );
  }
}

export default CinemasList;
