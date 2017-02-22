import React from 'react';

const FilmSelectionItem = ({filmSelectionItemPosterSource, filmSelectionItemTitle, filmSelectionItemDuration, filmSelectionItemOnClickEvent, filmSelectionItemId}) => {
  return(
    <div onClick={() => filmSelectionItemOnClickEvent(filmSelectionItemId)}>
      <img src={filmSelectionItemPosterSource}/>
      <p>{filmSelectionItemTitle}</p>
      <p>{filmSelectionItemDuration}</p>
    </div>
  )
}

export default FilmSelectionItem;