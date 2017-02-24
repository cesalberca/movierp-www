import React from 'react';

import FilmSelectionItem from './../../components/FilmSelectionItem';
import { selectWithFilter, getSelfId } from './../../utils/apiHelper';

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

  render() {
    const filmSelectionItems = this.state.filmList.map((item, index) =>
      (<FilmSelectionItem
          key={index}
          title={item.nombre}
          duration={item.duracion}
          cinemaId={this.props.params.cinemaSelectionId}
          filmId={getSelfId(item)}/>
      )
    );
    console.log(this.state.filmList);

    return(
      <div>
        <h1>{this.props.params.cinemaSelectionId}</h1>
        {filmSelectionItems}
      </div>
    );
  }
}

export default FilmSelection;
