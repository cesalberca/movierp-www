import React from 'react';

import CinemasList from './../components/CinemasList';
import FormContainer from './../components/FormContainer';

const Cinemas = () => {
  return (
    <div>
      <h1>Cinemas</h1>
      <CinemasList />
      <FormContainer targetTable="cinemas" title="New cinema" actionButtonText="Create new cinema"/>
    </div>
  );
}

export default Cinemas;
