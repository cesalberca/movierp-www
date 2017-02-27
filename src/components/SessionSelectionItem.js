import React from 'react';

import { Link } from 'react-router';

const SessionSelectionItem = ({id, date, availableSeats, filmId, cinemaId, sessionId}) => {
  return(
    <Link to={`/tickets/${cinemaId}/${filmId}/${sessionId}/buy`} className="card">
      <p>{date}</p>
      <p>{availableSeats} butacas libres</p>
    </Link>
  );
};

export default SessionSelectionItem;