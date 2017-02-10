import React from 'react';

import CinemaSelectionItem from './../components/CinemaSelectionItem';

class CinemaSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cinemaList: []
    };

    this.loadCinemas = this.loadCinemas.bind(this);
  }

  componentDidMount() {
    this.loadCinemas();
  }

  loadCinemas() {
    fetch('http://localhost:8080/api/cinemas', {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            this.setState({cinemaList: json._embedded.cinemas});
            console.log("Cines recogidos:");
            console.log(this.state.cinemaList);
        })
        .catch((error) => {
            console.log("error de form container", error);
            alert('Error al conseguir datos del servidor');
        });
  }

  render() {
    const cinemaSelectionItems = this.state.cinemaList.map((item, index) => {
      return(<CinemaSelectionItem key={index} cinemaSelectionItemName={item.nombre}/>);
    });

    return (
      <div>
        {cinemaSelectionItems}
      </div>
    );
  }
}

export default CinemaSelection;
