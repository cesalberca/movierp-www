import React from 'react';

import { getFilmData } from './../../utils/moviedbApiHelper';
import { selectWithFilter } from './../../utils/apiHelper';

import FilmSelectionItem from './../../components/FilmSelectionItem';

class FilmSelection extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      filmList: []
    };

    this.loadFilms = this.loadFilms.bind(this);
  }

  componentDidMount() {
    this.loadFilms();
  }

  loadFilms() {
    selectWithFilter('cinemas', `findMoviesByCinemaId?idCine=${this.props.params.cinemaSelectionId}`, 'films')
    .then((response) => {
      this.setState({filmList: response});
    });
  }

  getPosterForFilm(film) {
    // getUrlPoster('sing');
  }

  render() {
    getFilmData('Tron')
    .then(data => {
      console.log(data);
    })
    const filmSelectionItems = this.state.filmList.map((item, index) =>
      <FilmSelectionItem
        key={index}
        title={item.nombre}
        synopsis={item.sinopsis}
        duration={item.duracion}/>
    );

    return(
      <div>
        {filmSelectionItems}
      </div>
    );
  }
}

export default FilmSelection;
