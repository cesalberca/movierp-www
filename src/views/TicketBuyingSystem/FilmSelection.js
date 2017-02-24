import React from 'react';

import filmSelectionItem from './../../components/FilmSelectionItem';
import { selectAll } from './../utils/apiHelper';

class FilmSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedCinemaId: this.props.selectedCinemaId,
      filmList: []
    };

    this.loadFilms = this.loadFilms.bind(this);
  }

  componentDidMount() {
    this.loadFilms();
  }

  loadFilms() {
    selectAllWithFilter(`cinemas`, `findMoviesByCinemaId?idCine=${selectedCinemaId}`, 'films')
    .then((response) => {
      this.setState({filmList: response});
    });
  }

  changeViewToSessionSelection(selectedFilmId){
    //Aqui cambiamos de view a sessionSelection y le pasamos this.state.selectedCinemaId y selectedFilmId
  }

  render() {
    const filmSelectionItems = this.state.filmList.map((item, index) => {
      return(<filmSelectionItem key={index}
        FilmSelectionItemTitle = {item.nombre}
        filmSelectionItemDuration = {item.duracion}/>);
    });
    return(
      <div>
        {filmSelectionItems}
      </div>
    );
  }
}

export default FilmSelection;
