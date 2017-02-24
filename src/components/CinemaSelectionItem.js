import React from 'react';
import { Link } from 'react-router';

import './CinemaSelectionItem.css';

const CinemaSelectionItem = ({id, name, address}) => {
  return(
    <Link to={`/tickets/${id}`} className="CinemaSelectionItem">
      <p>{name}</p>
      <p>{address}</p>
    </Link>
  );
}

export default CinemaSelectionItem;
