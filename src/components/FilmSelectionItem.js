import React from 'react';

const FilmSelectionItem = ({FilmSelectionItemPosterSource, FilmSelectionItemTitle}) => {
  return(
    <div>
      <img src={FilmSelectionItemPosterSource}/>
      <p>{FilmSelectionItemTitle}</p>
    </div>
  )
}

export default FilmSelectionItem;