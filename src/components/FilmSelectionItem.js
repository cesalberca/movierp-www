import React from 'react';

const FilmSelectionItem = ({poster, title, duration, synopsis, filmSelectionItemId}) => {
  return(
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <h3 className="card__subtitle">Duración - {duration}</h3>
      <p className="card__text">{synopsis}</p>
    </div>
  );
}

export default FilmSelectionItem;
