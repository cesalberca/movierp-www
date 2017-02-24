import React from 'react';
import { Cell } from 'fixed-data-table';

const CellComponent = ({rowIndex, field, data, ...props}) => {
  return (
    <Cell {...props}>
      {data[rowIndex][field]}
    </Cell>
  );
}

export default CellComponent;
