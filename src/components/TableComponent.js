import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import CellComponent from './CellComponent';

import './../stylesheets/fixed-data-table.css';

const TableComponent = ({data}) => {
    return(
      <Table
        rowsCount={data.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
        {...this.props}>

        <Column
          header={<Cell>ID</Cell>}
          cell={<CellComponent data={data} field="idCine"/>}
          width={200}
          />

        <Column
          header={<Cell>Nombre</Cell>}
          cell={<CellComponent data={data} field="nombre"/>}
          width={200}
          />

        <Column
          header={<Cell>Dirección</Cell>}
          cell={<CellComponent data={data} field="direccion"/>}
          width={200}
          />

        <Column
          header={<Cell>Cif</Cell>}
          cell={<CellComponent data={data} field="cif"/>}
          width={200}
          />

        <Column
          header={<Cell>Código postal</Cell>}
          cell={<CellComponent data={data} field="codigoPostal"/>}
          width={200}
          />
      </Table>
    );
}

export default TableComponent;
