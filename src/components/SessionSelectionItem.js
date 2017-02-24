import React from 'react';

import { Link } from 'react-router';

const SessionSelectionItem = ({id, date, availableSeats}) => {
  return(
    <Link to="">
      <p>{date}</p>
      <p>{availableSeats} butacas libres</p>
    </Link>
  );
};

export default SessionSelectionItem;