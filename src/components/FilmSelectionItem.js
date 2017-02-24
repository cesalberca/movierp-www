import React from 'react';

import { Link } from 'react-router';

const FilmSelectionItem = ({poster, title, duration, cinemaId, filmId}) => {
  return(
    <Link to={`/tickets/${cinemaId}/${filmId}`}>
      <img src={poster}/>
      <p>{title}</p>
      <p>{duration}</p>
    </Link>
  );
}

export default FilmSelectionItem;
