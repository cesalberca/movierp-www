import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import Dimensions from 'react-dimensions';

import CellComponent from './CellComponent';

import './../stylesheets/fixed-data-table.css';

class TableComponent extends React.Component {
  render() {
    const { columns, data, containerWidth, containerHeight } = this.props;
    const columnsList = columns.map((column, index) => {
      return (
        <Column
          key={index}
          header={<Cell>{column.name}</Cell>}
          cell={<CellComponent data={data} field={column.field}/>}
          width={150}/>
      );
    });

    return(
      <Table
        rowsCount={data.length}
        rowHeight={50}
        headerHeight={50}
        width={containerWidth}
        height={containerHeight}
        >
          {columnsList}
      </Table>
    );
  }
}

export default Dimensions()(TableComponent);
