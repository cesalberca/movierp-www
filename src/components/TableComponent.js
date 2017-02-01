import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import CellComponent from './CellComponent';

import './../stylesheets/fixed-data-table.css';

const TableComponent = ({data, columns}) => {
    const columnsList = columns.map((column, index) => {
      return (
        <Column
          key={index}
          header={<Cell>{column.name}</Cell>} 
          cell={<CellComponent data={data} field={column.field}/>} 
          width={200}/>
      );
    });

    return(
      <Table
        rowsCount={data.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
        >
          {columnsList}
      </Table>
    );
}

export default TableComponent;
