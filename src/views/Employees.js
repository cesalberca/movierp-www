import React from 'react';

import FormContainer from './../components/FormContainer';

const Employees = () => {
  return(
    <div>
      <h1>Employees</h1>
      <FormContainer targetTable="employees" title="New employee" actionButtonText="Create new employee"/>
    </div>
  );
}

export default Employees;
