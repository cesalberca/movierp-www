import React from 'react';
import { Icon } from 'react-fa';

import ModalForm from './ModalForm';

import './FormActions.css';

class FormActions extends React.Component {
  render() {
    const {handleOpenCreateModal, handleOpenDeleteModal, handleLoad, isLoading} = this.props;
    return(
      <div className="FormActions">
        <button onClick={handleOpenCreateModal} className="btn btn--dark">Crear</button>
        <button className="btn btn--dark">Buscar</button>
        <button onClick={handleOpenDeleteModal} className="btn btn--dark">Borrar</button>
        <button onClick={handleLoad} disabled={isLoading} className="btn btn--dark"><Icon name="refresh" spin={isLoading}/></button>
        <ModalForm />
      </div>
    );
  }
}

export default FormActions;
