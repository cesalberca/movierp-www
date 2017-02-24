import React from 'react';

import FilmSelectionItem from './../../components/FilmSelectionItem';
import { selectWithFilter, getSelfId } from './../../utils/apiHelper';
import { getFilmData } from './../../utils/moviedbApiHelper';

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
    getFilmData('xxx');
   
    const filmSelectionItems = this.state.filmList.map((item, index) =>
      <FilmSelectionItem
        key={index}
        title={item.nombre}
        synopsis={item.sinopsis}
        duration={item.duracion}
        filmId={getSelfId(item)}/>
    );

    return(
      <div>
        {filmSelectionItems}
      </div>
    );
  }
}

export default FilmSelection;
