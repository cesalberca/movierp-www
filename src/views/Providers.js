import React from 'react';

import ProvidersList from './../components/ProvidersList';
import FormContainer from './../components/FormContainer';

const Providers = () => {
  return (
    <div>
      <h1>Proveedores</h1>
      <ProvidersList/>
      <FormContainer targetTable="providers" title="New provider" actionButtonText="Create new provider"/>
    </div>
  );
}

export default Providers;
