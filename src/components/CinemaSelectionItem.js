import React from 'react';

import './CinemaSelectionItem.css';

const CinemaSelectionItem = ({cinemaSelectionItemName, cinemaSelectionItemAddress, cinemaSelectionItemOnClickEvent, cinemaSelectionId}) => {
  return(
    <div className="CinemaSelectionItem" onClick={() => cinemaSelectionItemOnClickEvent(cinemaSelectionId)}>
      <p>{cinemaSelectionItemName}</p>
      <p>{cinemaSelectionItemAddress}</p>
    </div>
  );
}

export default CinemaSelectionItem;