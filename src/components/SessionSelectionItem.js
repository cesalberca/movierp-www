import React from 'react';
import { Link } from 'react-router';

const SessionSelectionItem = ({id, date, availableSeats, filmId, cinemaId, sessionId}) => {
  let isFull;
  if(availableSeats > 0){
    isFull=1;
  } else {
    isFull=.4;
  }

  return(
    <Link to={`/tickets/${cinemaId}/${filmId}/${sessionId}/buy`} className="card">
      {availableSeats === 0 ? (<h1 className="card__full">Lleno</h1>) : null}
      <p>{date}</p>
      <p>{availableSeats} butacas libres</p>
    </Link>
  );
};

export default SessionSelectionItem;