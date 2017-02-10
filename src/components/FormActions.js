import React from 'react';

import './FormActions.css';

class FormActions extends React.Component {
    render() {
        return(
            <div className="FormActions">
                <button className="btn btn--dark">Crear</button>
                <button className="btn btn--dark">Actualizar</button>
                <button className="btn btn--dark">Buscar</button>
                <button className="btn btn--dark">Borrar</button>
            </div>
        );
    }
}

export default FormActions;
