import React from 'react';

const FilmSelectionItem = ({poster, title, duration, filmSelectionItemId}) => {
  return(
    <div>
      <img src={poster}/>
      <p>{title}</p>
      <p>{duration}</p>
    </div>
  )
}

export default FilmSelectionItem;
