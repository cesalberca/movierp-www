import React from 'react';

import ClientsList from './../components/ClientsList';
import FormContainer from './../components/FormContainer';
import FormActions from './../components/FormActions';

const Clients = () => {
  return(
    <div>
      <h1>Clientes</h1>
      <ClientsList/>
      <FormContainer targetTable="clients" title="New client" actionButtonText="Create new client"/>
      <FormActions/>
    </div>
  );
}

export default Clients;
