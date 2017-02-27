import React from 'react';

import { Link } from 'react-router';

const FilmSelectionItem = ({poster, title, duration, synopsis, filmId, cinemaId}) => {
  return(
    <Link to={`/tickets/${filmId}/${cinemaId}`} className="card">
      <h1 className="card__title">{title}</h1>
      <h3 className="card__subtitle">Duración - {duration}</h3>
      <p className="card__text">{synopsis}</p>
    </Link>
  );
}

export default FilmSelectionItem;
