import React from 'react';

import ClientsList from './../components/ClientsList';
import FormContainer from './../components/FormContainer';
import FormActions from './../components/FormActions';

class Clients extends React.Component {
  render() {
    return(
      <div>
        <h1>Clientes</h1>
        <FormContainer targetTable="clients" title="New client" actionButtonText="Create new client"/>
        <FormActions/>
      </div>
    );
  }
}

export default Clients;
