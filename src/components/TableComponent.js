import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

const TableComponent = ({rows}) => {
  return(
    <Table
      rowHeight={50}
      rowsCount={rows.length}
      width={1000}
      height={200}
      headerHeight={50}
      >
      <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
    </Table>
  )
}

export default TableComponent;
