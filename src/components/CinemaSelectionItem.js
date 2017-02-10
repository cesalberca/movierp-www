import React from 'react';

const CinemaSelectionItem = ({cinemaSelectionItemName, cinemaSelectionItemAddress, CinemaSelectionItemOnClickEvent}) => {
  return(
    <div onClick={CinemaSelectionItemOnClickEvent}>
      <p>{cinemaSelectionItemName}</p>
      <p>{cinemaSelectionItemAddress}</p>
    </div>
  );
}

export default CinemaSelectionItem;