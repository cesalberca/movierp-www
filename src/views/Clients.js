import React from 'react';

import Clients from './../components/Clients';
import FormContainer from './../components/FormContainer';

const Client = () => {
  return (
    <div>
      <h1>Clientes</h1>
      <Clients />
      <FormContainer targetTable="clients" title="New client" actionButtonText="Create new client"/>
    </div>
  );
}

export default Clients;
