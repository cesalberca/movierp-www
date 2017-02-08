import React from 'react';

import FilmsList from './../components/FilmsList';
import FormContainer from './../components/FormContainer';

const Films = () => {
  return (
    <div>
      <h1>Películas</h1>
      <FilmsList />
      <FormContainer targetTable="films" title="New films" actionButtonText="Create new films"/>
    </div>
  );
}

export default Films;
