import React from 'react';
import { Link } from 'react-router';

const CinemaSelectionItem = ({id, name, address}) => {
  return(
    <Link to={`/tickets/${id}`} className="card">
      <h1 className="card__title">{name}</h1>
      <p>{address}</p>
    </Link>
  );
}

export default CinemaSelectionItem;
