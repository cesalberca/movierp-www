import React from 'react';

import CinemaSelectionItem from './../components/CinemaSelectionItem';

import { selectAll, getSelfId } from './../utils/apiHelper';

class CinemaSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cinemaList: []
    };

    this.loadCinemas = this.loadCinemas.bind(this);
    this.loadCinemaClickedFilms = this.loadCinemaClickedFilms.bind(this);
  }

  componentDidMount() {
    this.loadCinemas();
  }

  loadCinemas() {
    selectAll('cinemas')
    .then((response) => {
      //console.log(response);
      this.setState({cinemaList: response});
    });
  }

  loadCinemaClickedFilms(cinemaSelectionId) {
    console.log(cinemaSelectionId);
  }

  render() {
    const cinemaSelectionItems = this.state.cinemaList.map((item, index) => {
      console.log(item);
      return(<CinemaSelectionItem key={index}
      cinemaSelectionItemName={item.nombre}
      cinemaSelectionItemAddress={item.direccion}
      cinemaSelectionItemOnClickEvent={this.loadCinemaClickedFilms}
      cinemaSelectionId={getSelfId(item)}/>);
    });

    return (
      <div>
        {cinemaSelectionItems}
      </div>
    );
  }
}

export default CinemaSelection;
