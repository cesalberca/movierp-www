import React from 'react';
import { Link } from 'react-router';

import './CinemaSelectionItem.css';

const CinemaSelectionItem = ({cinemaSelectionItemName, cinemaSelectionItemAddress, cinemaSelectionItemOnClickEvent, cinemaSelectionId}) => {
  return(
    <Link to={`/cinemaSelection/${cinemaSelectionId}`} className="CinemaSelectionItem">
      <p>{cinemaSelectionItemName}</p>
      <p>{cinemaSelectionItemAddress}</p>
    </Link>
  );
}

export default CinemaSelectionItem;
